export const SingleArticleContainer = ({ selectedArticle }) => {
  if (!selectedArticle) return "No article data";

  return (
    <section className=" column-container">
      <h2>{selectedArticle.title}</h2>
      <img src={selectedArticle.article_img_url} alt={selectedArticle.title} />
      <p>
        <b>Topic:</b> {selectedArticle.topic}
      </p>
      <p>
        <b>Author:</b> {selectedArticle.author}
      </p>
      <p>{selectedArticle.body}</p>
      <p>
        <b>Votes:</b> {selectedArticle.votes}
      </p>
    </section>
  );
};
