export const SingleArticleContainer = ({ selectedArticle, isLoading }) => {
  console.log(selectedArticle);
  return (
    <section className="column-container">
      {isLoading ? (
        "Load Wireframe"
      ) : (
        <>
          <p>{selectedArticle.title}</p>
          <img
            src={selectedArticle.article_img_url}
            alt={selectedArticle.title}
          />
          <p>Topic: {selectedArticle.topic}</p>
          <p>Author: {selectedArticle.author}</p>
          <p>{selectedArticle.body}</p>
          <p>Votes: {selectedArticle.votes}</p>
        </>
      )}
    </section>
  );
};
