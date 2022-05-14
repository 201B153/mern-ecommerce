import Spinner from 'react-bootstrap/Spinner';
export default function LoadingBox() {
  return (
    <Spinner aniamtion="border" role="status">
      <span className="visuallly-hidden">Loading...</span>
    </Spinner>
  );
}
