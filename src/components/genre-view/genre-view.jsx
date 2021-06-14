import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class GenreView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movies, genre } = this.props;

    if (!genre) return null;

    return (
      <Container className="wrapper container-fluid">
      <Row>
        <Col className="col-3" />
        <Col className="genre-view container-fluid align-items-center col-6">
          <img
            className="genre-poster "
            src="https://via.placeholder.com/150"
          />
          <div className="genre-title ">
            {/* <span className="label">Name: </span> */}
            <span className="value">{genre.Genre.Name}</span>
          </div>
          <div className="genre-description ">
            {/* <span className="label">Description: </span> */}
            <span className="value">{genre.Genre.Description}</span>
          </div>
          <Link to={`/`}>
            <Button variant="link">Return</Button>
          </Link>
        </Col>
        <Col className="col-3" />
      </Row>
      {/* <Container>
        <h4 className="mt-4">Some {genre.Genre.Name} movies</h4>
        <div className="d-flex row mt-3 ml-2">
          {movies.map((movie) => {
            if (movie.Genre.Name === genre.Genre.Name) {
              return (
                <div key={movie._id}>
                  <Card
                    className="mb-3 mr-2 h-100"
                    style={{ width: '16rem' }}
                  >
                    <Card.Img variant="top" src={movie.ImagePath} />
                    <Card.Body>
                      <Link
                        className="text-muted"
                        to={`/movies/${movie._id}`}
                      >
                        <Card.Title>{movie.Title}</Card.Title>
                      </Link>
                      <Card.Text>
                        {movie.Description.substring(0, 90)}...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-white border-top-0">
                      <Link to={`/movies/${movie._id}`}>
                        <Button
                          variant="link"
                          className="read-more-link pl-0"
                        >
                          Read more
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </Container> */}
    </Container>
  );
}
}

GenreView.propTypes = {
Movie: PropTypes.shape({
  Genre: {
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    // ImagePath: PropTypes.string.isRequired,
  },
}),
};