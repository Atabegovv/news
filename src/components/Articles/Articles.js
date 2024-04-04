import React from "react";
import MainArticle from "../MainArticle/MainArticle.js";
import SmallArticle from "../SmallArticle/SmallArticle.js";
import "./Articles.css";

const Articles = ({articles, items }) => {
    return (
        <main className="articles main">
            <div className="container grid">
                <section className="articles__big-col">
                    {articles.items.slice(0, 3).map((item) => {
                        return (
                            <MainArticle
                                key={item.title}
                                title={item.title}
                                image={item.image}
                                description={item.description}
                                category={articles.categories.find((categoryItem) => categoryItem.id === item.category_id).name}
                                source={articles.sources.find((sourceItem) => sourceItem.id === item.source_id).name}
                            />
                        )
                    })}
                </section>
                <section className="articles__small-col">
                    {articles.items.slice(3, 10).map((item) => {
                        return (
                            <SmallArticle
                                key={item.title}
                                title={item.title}
                                date={item.date}
                                source={articles.sources.find((sourceItem) => sourceItem.id === item.source_id).name}
                            />
                        )
                    })}
                </section>
            </div>
        </main>
    )
}

export default Articles;