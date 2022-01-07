function Footer() {
    const footerYear = new Date().getFullYear();

    return (
        <footer className="footer p-10 bg-neutral shadow-lg text-primary-content footer-center h-40 text-lg font-bold">
            <div>
                <p>Copyright &copy; {footerYear}. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
