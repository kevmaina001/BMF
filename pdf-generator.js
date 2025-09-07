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

            // Check if we have a pre-generated PDF file to download
            const pdfExists = await this.checkPDFExists();
            if (pdfExists) {
                this.downloadExistingPDF();
                return;
            }

            // Otherwise, generate and download the HTML version for conversion
            this.downloadHTMLForPDFConversion();

        } catch (error) {
            console.error('PDF generation failed:', error);
            this.showErrorMessage('Failed to generate PDF. Please try again.');
        } finally {
            this.isGenerating = false;
            this.hideGeneratingMessage();
        }
    }

    async checkPDFExists() {
        try {
            const response = await fetch('BMF-Foundation-Profile.pdf', { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    downloadExistingPDF() {
        // Download pre-generated PDF file
        const link = document.createElement('a');
        link.href = 'BMF-Foundation-Profile.pdf';
        link.download = 'Beulah-Muthoni-Foundation-Profile.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    downloadHTMLForPDFConversion() {
        // Create a new window with the PDF-ready document and auto-trigger print
        const pdfWindow = window.open('BMF-Foundation-Profile.html', '_blank', 'width=900,height=1200');
        
        if (pdfWindow) {
            pdfWindow.onload = () => {
                // Auto-trigger print dialog after a short delay
                setTimeout(() => {
                    pdfWindow.print();
                }, 1000);
            };
            
            // Show brief instructions
            this.showPrintInstructions();
        } else {
            // Fallback: download HTML file
            const link = document.createElement('a');
            link.href = 'BMF-Foundation-Profile.html';
            link.download = 'Beulah-Muthoni-Foundation-Profile.html';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.showConversionInstructions();
        }
    }

    showPrintInstructions() {
        const instructions = document.createElement('div');
        instructions.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2';
        instructions.innerHTML = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-info-circle"></i>
                <span>Print dialog opened. Select "Save as PDF" to download.</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        document.body.appendChild(instructions);

        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (instructions.parentElement) {
                instructions.remove();
            }
        }, 8000);
    }

    showConversionInstructions() {
        const instructions = document.createElement('div');
        instructions.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-2xl p-6 z-50 max-w-md';
        instructions.innerHTML = `
            <div class="text-center">
                <h3 class="text-lg font-bold text-gray-800 mb-4">PDF Conversion Instructions</h3>
                <div class="text-left text-sm text-gray-600 space-y-2">
                    <p><strong>Option 1:</strong> Open the downloaded HTML file and use Ctrl+P (Cmd+P on Mac) then select "Save as PDF"</p>
                    <p><strong>Option 2:</strong> Use an online HTML to PDF converter</p>
                    <p><strong>Option 3:</strong> Open in Chrome and use Print → Save as PDF</p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        class="mt-4 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors">
                    Got it!
                </button>
            </div>
        `;
        document.body.appendChild(instructions);

        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (instructions.parentElement) {
                instructions.remove();
            }
        }, 10000);
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