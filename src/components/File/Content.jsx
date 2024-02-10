import { useEffect, useRef, useState } from "react";

function Content({ data }) {
  const paragraph = useRef(null);
  const [numberOfLines, setNumberOfLines] = useState(0);

  useEffect(() => {
    const containerWidth = paragraph.current.offsetWidth;
    const fontSize = parseFloat(
      window.getComputedStyle(paragraph.current).fontSize
    );
    const wordsPerLine = Math.floor(containerWidth / fontSize);
    const paragraphText = paragraph.current.innerText.trim();

    const estimatedLines = Math.ceil(paragraphText.length / wordsPerLine);
    setNumberOfLines(estimatedLines);
  }, [paragraph, data]);

  return (
    <div className="text-body px-6 py-3 text-secondary-10 flex overflow-y-scroll overflow-x-hidden">
      {/* numbers list */}
      <div className="w-6 mr-6 text-end">
        {Array.from({ length: numberOfLines + 2 }, (_, i) => (
          <p key={i}>{i + 1}</p>
        ))}
      </div>
      {/* starts list */}
      <div>
        <p>/**</p>
        {Array.from({ length: numberOfLines + 1 }, (_, i) =>
          i === numberOfLines ? <p key={i}>&nbsp;*/</p> : <p key={i}>&nbsp;*</p>
        )}
      </div>
      <div>
        <br></br>
        <p className="about-paragraph" ref={paragraph}>
          {data}
        </p>
      </div>
    </div>
  );
}

export default Content;
