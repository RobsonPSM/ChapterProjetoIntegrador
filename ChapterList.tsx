import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import ChapterCard from './ChapterCard';

interface Chapter {
  chapter_id: number;
  chapter_nome: string;
  chapter_descricao: string;
  chapter_status: string;
  usuario_id: number;
}

const ChapterList = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    async function fetchChapters() {
      const response = await fetch('http://academico3.rj.senac.br/api/Chapter');
      const data = await response.json();
      setChapters(data);
    }

    fetchChapters();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        {chapters.map((chapter) => (
          <ChapterCard
            key={chapter.chapter_id}
            chapterNome={chapter.chapter_nome}
            chapterDescricao={chapter.chapter_descricao}
          />
        ))}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default ChapterList;