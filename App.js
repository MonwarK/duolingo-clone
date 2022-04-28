import { SafeAreaView, View, Alert, ActivityIndicator } from 'react-native';
import Styles from './App.styles';
import questions from "./assets/data/allQuestions"
import { useState, useEffect } from 'react';
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import Header from './src/components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(questions[currentQuestionIndex])
  const [loading, setLoading] = useState(true);

  const [lives, setLives] = useState(5)

  useEffect(() => {
    loadData();
  }, [])

  useEffect(() => {
    if(!loading) {
      saveData();
    }
  }, [currentQuestionIndex, lives, loading])

  useEffect(() => {
    setSelectedQuestion(questions[currentQuestionIndex])
  }, [currentQuestionIndex])

  const onCorrect = () => {
    const nextIndex = currentQuestionIndex + 1;
    if(nextIndex >= questions.length) {
      Alert.alert("You Won!");
      setCurrentQuestionIndex(0); 
    } else {
      Alert.alert("Correct!");
      setCurrentQuestionIndex(nextIndex); 
    }
  }

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  }

  const onWrong = () => {
    if(lives <= 1) {
      Alert.alert("Game Over!", "Try again", [
        {
          text: 'Try again',
          onPress: restart
        }
      ]);
    } else {
      Alert.alert("Wrooooong!");
      setLives(lives - 1);
    }
  } 

  const saveData = async () => {
    AsyncStorage.setItem('lives', lives.toString());
    AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
  }

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('lives');
    if(loadedLives) {
      setLives(parseInt(loadedLives))
    }

    const questionIndex = await AsyncStorage.getItem('currentQuestionIndex');
    if(questionIndex) {
      setCurrentQuestionIndex(parseInt(questionIndex))
    }

    setLoading(false);
  }

  if(loading) {
    return (
      <ActivityIndicator />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={Styles.root}>
        <Header 
          progress={currentQuestionIndex / questions.length} 
          lives={lives}
        />
        {selectedQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
          <ImageMultipleChoiceQuestion 
            question={selectedQuestion}
            onCorrect={onCorrect}
            onWrong={onWrong}
          />
        )}
        {selectedQuestion.type === "OPEN_ENDED" && (
          <OpenEndedQuestion 
            question={selectedQuestion}
            onCorrect={onCorrect}
            onWrong={onWrong}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default App;