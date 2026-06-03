import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)
  const { i18n, t } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => 
  {
    i18n.changeLanguage(e.target.value);
  };


  const navLinks = [
    { to: '/', label: t("nav.homeLink") },
    { to: '/research-approach', label: t("nav.researchApproachLink") },
    { to: '/projects', label: t("nav.projectsLink") },
    { to: '/resources', label: t("nav.resourcesLink") },
    { to: '/blog', label: t("nav.blogLink")},
    { to: '/podcast', label: t("nav.podcastLink")},
    { to: '/publications', label: t("nav.publicationsLink") },
    { to: '/partners', label: t("nav.partnersLink") },
    { to: '/meet-the-team', label: t("nav.meetTheTeamLink") },
    { to: '/about', label: t("nav.aboutLink") },
  ];


  return (
    <nav className="bg-edu-blue-400 text-white font-nav p-6 md:p-4 text-lg">
      {/*container*/}
      <div className="flex items-center justify-between md:justify-center max-w-7xl mx-auto relative">
        
        {/*hamburger menu for mobile*/}
        <button 
          className="md:hidden z-50" 
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isHamburgerMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/*desktop-visible links*/}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className='hover:text-edu-blue-600 hover:underline'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/*language selector (on the right on mobile layout)*/}
        <div className="md:absolute md:right-0">
          <select className="rounded px-2 py-1" onChange={changeLanguage} defaultValue={i18n.language}>
            <option value={"en"}>EN</option>
            <option value={"fr"}>FR</option>
          </select>
        </div>

        {/*overlay for mobile menu*/}
        <div className={`
          fixed inset-0 bg-edu-blue-400 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden
          ${isHamburgerMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              onClick={() => setIsHamburgerMenuOpen(false)} // Close menu on click
              className='text-2xl hover:text-edu-blue-600'
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Navbar