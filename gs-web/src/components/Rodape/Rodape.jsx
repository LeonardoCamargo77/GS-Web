export default function Rodape() {
    return (
      <footer className="w-full bg-gray-800 h-20 flex items-center justify-between">
         <p className="ml-4 text-white font-bold text-lg">1TDSR </p>
         <p className="ml-4 text-white font-semibold">Ana Paula - RM552513</p>
         <p className="ml-4 text-white font-semibold">Calina Thalya - RM552523</p>
         <p className="ml-4 text-white font-semibold">Geovana Ribeiro - RM99646</p>
        <p className="ml-4 text-white font-semibold">Leonardo Lucena - RM552537</p>
        <p className="ml-4 text-white font-semibold">Nathan Nunes - RM552539</p>
        
        
  
        <div className="flex items-center space-x-4 mr-4">
          <a href="https://github.com/LeonardoCamargo77/GS-Web" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/git.png" alt="GitHub" className="h-10 w-10" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/faceazul.webp" alt="Facebook" className="h-10 w-10" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/twitter.png" alt="Twitter" className="h-10 w-10" />
          </a>
          <a href="https://gs-web-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/vercel.png" alt="Vercel" className="h-10 w-10" />
          </a>
        </div>
      </footer>
    );
  }