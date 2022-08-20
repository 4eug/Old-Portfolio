function Footer() {
  return (
    <footer className="p-4 md:pl-80 md:pr-80">
      <span className="block text-base text-center sm:text-center ">
        Copyright &copy;
        <a href="#">4eug</a> {new Date().getFullYear()}{' '}
         All rights reserved 
      </span>
    </footer>
  );
}
export default Footer;
