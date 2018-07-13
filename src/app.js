class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Innoloft Frontend</strong>
                    </a>
                    </div>
                </div>
            </header>
        );
    }
}

class PageContent extends React.Component {
    render() {
        return (
            <main role="main">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-12">
                            <h1>Playground</h1>
                            <p>Innoloft Frontend Application with React.js</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="text-muted">
                <div className="container">
                    <p className="text-center">&copy;2018 Innoloft Frontend</p>
                </div>
            </footer>
        );
    }
}

class InnoloftFrontend extends React.Component {
    render() {
       return (
            <div>
            <Header />
            <PageContent />
            <Footer />
            </div>
       ); 
    }
}

ReactDOM.render(<InnoloftFrontend />, document.getElementById('app'));