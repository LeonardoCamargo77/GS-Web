export default function Rodape() {
    return (
      <footer className="w-full bg-gray-800 h-20 flex items-center justify-between">
        <p className="ml-4 text-white font-medium">Todos os direitos reservados</p>
  
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