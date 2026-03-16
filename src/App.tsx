import { useState, useRef } from 'react';
import { CoverPage } from './components/CoverPage';
import { AboutPage } from './components/AboutPage';
import { GalleryPage1 } from './components/GalleryPage1';
import { GalleryPage2 } from './components/GalleryPage2';
import { GalleryPage3 } from './components/GalleryPage3';
import { ContactPage } from './components/ContactPage';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from './components/ui/button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  
  const pages = [
    { component: CoverPage, title: 'Cover' },
    { component: AboutPage, title: 'About' },
    { component: GalleryPage1, title: 'Gallery 1' },
    { component: GalleryPage2, title: 'Gallery 2' },
    { component: GalleryPage3, title: 'Gallery 3' },
    { component: ContactPage, title: 'Contact' },
  ];

  const PageComponent = pages[currentPage].component;

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const generatePDF = async () => {
    if (!pdfContainerRef.current) return;
    
    setIsGenerating(true);
    
    try {
      // A4 landscape dimensions in mm
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      // A4 landscape: 297mm x 210mm
      const pdfWidth = 297;
      const pdfHeight = 210;
      
      // Create a style element to override oklch colors
      const styleElement = document.createElement('style');
      styleElement.id = 'pdf-color-override';
      styleElement.textContent = `
        :root {
          --foreground: #252525 !important;
          --card-foreground: #252525 !important;
          --popover: #ffffff !important;
          --popover-foreground: #252525 !important;
          --primary-foreground: #ffffff !important;
          --secondary: #f2f2f5 !important;
          --ring: #b5b5b5 !important;
          --chart-1: #f59e0b !important;
          --chart-2: #3b82f6 !important;
          --chart-3: #1e40af !important;
          --chart-4: #fbbf24 !important;
          --chart-5: #fcd34d !important;
          --sidebar: #fafafa !important;
          --sidebar-foreground: #252525 !important;
          --sidebar-primary-foreground: #fafafa !important;
          --sidebar-accent: #f5f5f5 !important;
          --sidebar-accent-foreground: #404040 !important;
          --sidebar-border: #e5e5e5 !important;
          --sidebar-ring: #b5b5b5 !important;
        }
      `;
      document.head.appendChild(styleElement);
      
      // Hide navigation controls temporarily
      const navControls = pdfContainerRef.current.querySelectorAll('.no-print');
      navControls.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });

      // Capture each page
      for (let i = 0; i < pages.length; i++) {
        // Set current page
        setCurrentPage(i);
        
        // Wait for render
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Capture the page
        const canvas = await html2canvas(pdfContainerRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        
        // Add page to PDF (except for first page)
        if (i > 0) {
          pdf.addPage();
        }
        
        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      }
      
      // Remove the style override
      const overrideStyle = document.getElementById('pdf-color-override');
      if (overrideStyle) {
        overrideStyle.remove();
      }
      
      // Restore navigation controls
      navControls.forEach(el => {
        (el as HTMLElement).style.display = '';
      });
      
      // Save PDF
      pdf.save('portfolio.pdf');
      
      // Reset to first page
      setCurrentPage(0);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('PDF 생성 중 오류가 발생했습니다.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 gap-2 sm:gap-4">
      {/* PDF Style Container - Landscape */}
      <div 
        ref={pdfContainerRef}
        className="relative w-full max-w-6xl bg-white shadow-2xl aspect-[1.414/1] md:aspect-[1.414/1] overflow-hidden"
      >
        {/* Page Content */}
        <div className="w-full h-full overflow-y-auto">
          <PageComponent />
        </div>

        {/* Navigation Controls */}
        <div className="no-print absolute bottom-6 left-0 right-0 flex items-center justify-between px-6">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPage
                    ? 'bg-gray-900 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Page Number */}
        <div className="no-print absolute top-6 right-6 text-sm text-gray-400">
          {currentPage + 1} / {pages.length}
        </div>
      </div>
    </div>
  );
}