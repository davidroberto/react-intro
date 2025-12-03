const ListCategories = () => {

    const categories = [
        { id: 1, title: 'Technology', isPublished: false },
        { id: 2, title: 'Health', isPublished: true },
        { id: 3, title: 'Science', isPublished: false },
        { id: 4, title: 'Art', isPublished: true },
    ];

    const publishedCategories = categories.filter(category => category.isPublished);

    return (
        <section>

            <h2>Categories</h2>

            {publishedCategories.map((category) => (
                <article>
                    <h3>{category.title}</h3>
                </article>
            ))}


        </section>
    )
}


export default ListCategories;