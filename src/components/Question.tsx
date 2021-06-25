import { ReactNode } from "react";
import "../styles/question.scss";

type QuestionProps = {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
};

export default function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div
      className={`question ${isAnswered ? "answered" : ""} ${
        isHighlighted && !isAnswered ? "highlighted" : ""
      }`}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
