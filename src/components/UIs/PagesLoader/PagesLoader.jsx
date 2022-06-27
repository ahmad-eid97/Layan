import cls from './pagesLoader.module.scss';

const Loader = () => {
  return (
    <div className={cls.wrppaer}>

      <div className={cls.lds_facebook}><div></div><div></div><div></div></div>

    </div>
  )
}

export default Loader