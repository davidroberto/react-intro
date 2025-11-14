const Header = () => {

    const user = {
        firstName: "David",
        lastName: "Robert",
        age: 35

    }

    const displayFullName = () => {
        return user.firstName + " " + user.lastName;
    }

    return (
        <header>
            <h1>Welcome, {displayFullName()}!</h1>
        </header>
    );

}

export default Header;