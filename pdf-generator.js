// PDF Generation Utility for BMF
class BMFPDFGenerator {
    constructor() {
        this.isGenerating = false;
    }

    async generatePDF() {
        if (this.isGenerating) {
            console.log('PDF generation already in progress');
            return;
        }

        try {
            this.isGenerating = true;
            this.showGeneratingMessage();

            // Method 1: Try using browser's native print to PDF
            if (this.supportsPrintToPDF()) {
                await this.generateViaBrowserPrint();
                return;
            }

            // Method 2: Use HTML5 PDF generation (fallback)
            await this.generateViaHTML5();

        } catch (error) {
            console.error('PDF generation failed:', error);
            this.showErrorMessage('Failed to generate PDF. Please try again.');
        } finally {
            this.isGenerating = false;
            this.hideGeneratingMessage();
        }
    }

    supportsPrintToPDF() {
        // Check if browser supports print to PDF
        return window.chrome !== undefined || window.navigator.userAgent.includes('Chrome');
    }

    async generateViaBrowserPrint() {
        // Open the professional PDF document in a new window
        const pdfWindow = window.open('BMF-Foundation-Profile.html', '_blank', 'width=800,height=1000');
        
        if (pdfWindow) {
            pdfWindow.onload = () => {
                // Add a small delay to ensure content loads
                setTimeout(() => {
                    pdfWindow.print();
                }, 500);
            };
        } else {
            throw new Error('Popup blocked. Please allow popups and try again.');
        }
    }

    async generateViaHTML5() {
        // Load the PDF profile content
        try {
            const response = await fetch('BMF-Foundation-Profile.html');
            const htmlContent = await response.text();
            
            // Create a temporary iframe for PDF generation
            const iframe = document.createElement('iframe');
            iframe.style.position = 'absolute';
            iframe.style.left = '-9999px';
            iframe.style.width = '8.5in';
            iframe.style.height = '11in';
            
            document.body.appendChild(iframe);
            
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(htmlContent);
            iframeDoc.close();
            
            // Wait for content to load
            setTimeout(() => {
                iframe.contentWindow.print();
                document.body.removeChild(iframe);
            }, 1000);
            
        } catch (error) {
            console.error('Error loading PDF content:', error);
            // Fallback to direct navigation
            window.open('BMF-Foundation-Profile.html', '_blank');
        }
    }

    showGeneratingMessage() {
        // Create or show a loading message
        let messageEl = document.getElementById('pdf-generating-message');
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.id = 'pdf-generating-message';
            messageEl.className = 'fixed top-4 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2';
            messageEl.innerHTML = `
                <div class="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>Preparing PDF document...</span>
            `;
            document.body.appendChild(messageEl);
        }
        messageEl.style.display = 'flex';
    }

    hideGeneratingMessage() {
        const messageEl = document.getElementById('pdf-generating-message');
        if (messageEl) {
            messageEl.style.display = 'none';
        }
    }

    showErrorMessage(message) {
        // Show error message to user
        const errorEl = document.createElement('div');
        errorEl.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        errorEl.innerHTML = message;
        document.body.appendChild(errorEl);

        setTimeout(() => {
            document.body.removeChild(errorEl);
        }, 5000);
    }

    // Alternative method: Direct download of the HTML file
    downloadHTMLVersion() {
        fetch('BMF-Foundation-Profile.html')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Beulah-Muthonii-Foundation-Profile.html';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Download failed:', error);
                this.showErrorMessage('Download failed. Please try again.');
            });
    }
}

// Initialize PDF generator
const pdfGenerator = new BMFPDFGenerator();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMFPDFGenerator;
}