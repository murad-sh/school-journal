export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container py-4">
        <p className="text-center text-sm leading-loose text-slate-800 dark:text-slate-50">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
