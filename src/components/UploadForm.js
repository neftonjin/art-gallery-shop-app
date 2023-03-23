import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const type = ['image/png', 'image/jpeg'];
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && type.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError('Please select an image file which have (.png or .jpeg) extension');
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error} </div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
      </div>
    </form>
  );
};

export default UploadForm;
