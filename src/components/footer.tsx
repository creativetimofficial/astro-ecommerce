export default function Footer() {
  return (
    <>
      <footer className="border-top p-4">
        <div className="copyright text-center text-sm text-muted">
          All rights reserved. Copyright
          © <script>
            document.write(new Date().getFullYear()) 
          </script>
          &nbsp;Astro Ecommerce by
          <a href="https://www.creative-tim.com" className="text-secondary ms-1" target="_blank">Creative Tim</a>.
        </div>
      </footer>
    </>
  );
}


