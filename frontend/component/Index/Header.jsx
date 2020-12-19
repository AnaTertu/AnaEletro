const Header = () => {
    return (
        <header className="bg-dark">
            <nav className="container nav align-items-center justify-content-between">
                <a href="index.html" className="navbar-brand nav-link">
                    FullStackEletro
                </a>
                <a href="register.html" className="navbar-brand nav-link text-light">
                    Cadastro de clientes
                </a>
                <a href="product.html" className="navbar-brand nav-link text-light">
                    Produtos
                </a>
                < a href="image.html" className="navbar-brand nav-link">
                    Imagens Api
                </a>
            </nav>
            
            {/* <nav>
                <h2 className="nav-link text-light"> Seja Bem-vindo(a), cadastre-se aqui!</h2>    
                <h5 className="nav-link text-light"> Em nossa loja, <em>programadores tem desconto</em> nos produtos para a sua casa!</h5>
            </nav> */}
        </header>
    );
}
