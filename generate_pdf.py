#!/usr/bin/env python3
"""
BMF PDF Generator
Converts the HTML profile to a proper PDF file
"""

import os
import sys
from pathlib import Path

def install_dependencies():
    """Install required dependencies"""
    try:
        import weasyprint
        return True
    except ImportError:
        print("Installing weasyprint for PDF generation...")
        os.system(f"{sys.executable} -m pip install weasyprint")
        try:
            import weasyprint
            return True
        except ImportError:
            print("Failed to install weasyprint. Trying alternative method...")
            return False

def generate_pdf_weasyprint():
    """Generate PDF using WeasyPrint"""
    try:
        from weasyprint import HTML, CSS
        
        html_file = Path("BMF-Foundation-Profile.html")
        pdf_file = Path("BMF-Foundation-Profile.pdf")
        
        if not html_file.exists():
            print(f"Error: {html_file} not found")
            return False
        
        # Additional CSS for better PDF rendering
        pdf_css = CSS(string='''
            @page {
                size: A4;
                margin: 0.75in;
            }
            
            body {
                font-family: 'Segoe UI', Arial, sans-serif !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
            
            .document-container {
                max-width: none;
                padding: 0;
            }
            
            .section {
                break-inside: avoid;
                margin-bottom: 20px;
            }
            
            .programs-grid {
                break-inside: avoid;
            }
            
            .program-card {
                break-inside: avoid;
                margin-bottom: 10px;
            }
        ''')
        
        print("Generating PDF from HTML...")
        html_doc = HTML(filename=str(html_file))
        html_doc.write_pdf(str(pdf_file), stylesheets=[pdf_css])
        
        print(f"PDF generated successfully: {pdf_file}")
        return True
        
    except Exception as e:
        print(f"Error generating PDF with WeasyPrint: {e}")
        return False

def generate_pdf_alternative():
    """Alternative PDF generation method"""
    try:
        # Try using pdfkit (requires wkhtmltopdf)
        import pdfkit
        
        options = {
            'page-size': 'A4',
            'margin-top': '0.75in',
            'margin-right': '0.75in',
            'margin-bottom': '0.75in',
            'margin-left': '0.75in',
            'encoding': "UTF-8",
            'no-outline': None,
            'enable-local-file-access': None
        }
        
        pdfkit.from_file('BMF-Foundation-Profile.html', 'BMF-Foundation-Profile.pdf', options=options)
        print("PDF generated successfully using pdfkit")
        return True
        
    except ImportError:
        print("pdfkit not available, installing...")
        os.system(f"{sys.executable} -m pip install pdfkit")
        return False
    except Exception as e:
        print(f"Error with pdfkit: {e}")
        return False

def main():
    """Main function to generate PDF"""
    print("BMF PDF Generator")
    print("================")
    
    # Change to script directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Try WeasyPrint first
    if install_dependencies():
        if generate_pdf_weasyprint():
            return
    
    # Try alternative method
    if generate_pdf_alternative():
        return
    
    print("\nPDF generation failed with automated tools.")
    print("Please use one of these manual methods:")
    print("1. Open BMF-Foundation-Profile.html in Chrome")
    print("2. Press Ctrl+P (Cmd+P on Mac)")
    print("3. Select 'Save as PDF' as destination")
    print("4. Click Save")

if __name__ == "__main__":
    main()