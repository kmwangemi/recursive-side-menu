import Sidebar from '../sidebar/Sidebar';
import style from './layout.module.css';

const Layout = ({ children }) => {
   return (
      <div className={style.layout}>
         <header className={style.header}></header>
         <aside className={style.aside}>
            <Sidebar/>
         </aside>
         <main className={style.main}>{children}</main>
         <footer className={style.footer}></footer>
      </div>
   )
}

export default Layout
