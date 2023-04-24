import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

interface ChapterCardProps {
  chapterNome: string;
  chapterDescricao: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({
  chapterNome,
  chapterDescricao,
}) => {
  const handleLongPress = () => {
    console.log(chapterDescricao);
  };

  return (
    <TouchableWithoutFeedback onLongPress={handleLongPress}>
      <Card style={{ margin: 8, borderRadius: 8, borderWidth: 1 }}>
        <Card.Content>
          <Title>{chapterNome}</Title>
          <Paragraph>{chapterDescricao}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default ChapterCard;