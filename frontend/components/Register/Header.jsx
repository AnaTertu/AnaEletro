const Header = () => {
    return (
        <header className="bg-dark">
            <nav className="container nav align-items-center justify-content-between">
                <a href="index.html" className="navbar-brand nav-link">
                    AnaEletro
                </a>
                <a href="register.html" className="navbar-brand nav-link text-light">
                    Cadastro de clientes
                </a>
                <a href="product.html" className="navbar-brand nav-link text-light">
                    Produtos
                </a>
                < a href="order.html" className="navbar-brand nav-link">
                    Pedido
                </a>
                < a href="orderIndex.html" className="navbar-brand nav-link">
                    Registro de pedidos
                </a>
                <a href="../../../backend/dashboard.php" className="nav-link text-light"> Dashboard </a>

            </nav>
        </header>
    );
}
