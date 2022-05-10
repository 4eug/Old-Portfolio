function Footer() {
  return (
    <footer className="p-4 md:pl-80 md:pr-80">
      <hr className="my-6 border-gray-200 mx-auto sm:mx-auto dark:border-gray-300 lg:my-8" />
      <span className="block text-sm  text-center sm:text-center ">
        Copyright &copy;
        <a href="#">4eug</a> {new Date().getFullYear()}
      </span>
    </footer>
  );
}
export default Footer;
