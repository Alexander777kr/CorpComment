import { useEffect, useState } from 'react';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  useEffect(() => {
    fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
    )
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedbacks));
  }, []);

  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
