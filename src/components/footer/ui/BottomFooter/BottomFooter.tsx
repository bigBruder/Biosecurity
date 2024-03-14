import css from './BottomFooter.module.scss';

const BottomFooter = () => (
  <div className={css.botomFooter}>
    <div className={css.botomFooterTop}>
      <h2 className={css.title}>
        <span>Feel free</span> to contact us with any questions <span>or suggestions.</span>
      </h2>
      <form className={css.form}>
        <textarea className={css.textArea} placeholder='Your message'></textarea>
        <button className={css.textAreaSubmit} type='submit'>
          <svg
            width='17'
            height='10'
            viewBox='0 0 17 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 5.23828H16M16 5.23828L12 1.23828M16 5.23828L12 9.23828'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </form>
    </div>
    <div className={css.copyright}>
      <span className=''>© 2023 — Copyright</span>
      <span className=''>Privacy</span>
    </div>
  </div>
);

export { BottomFooter };
