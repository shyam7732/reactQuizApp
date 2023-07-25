import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@mui/material';
import Categories, { } from "../../Data/Categories";
import ErrorMessage, { } from "../../components/ErrorMessage/ErrorMessage";
import "./Home1.css";


function Home ({ name, setName, fetchQuestions }) {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    }
    else {
      setError(false);
      fetchQuestions(category, difficulty);
      return navigate("/quiz")
    }
  }

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Fill Out The Details</span>
        <div className="settings_select">

          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            style={{ marginBottom: 30 }}
            label="select Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {
              Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))
            }
          </TextField>

          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}>
            Start Quiz
          </Button>

        </div>
      </div>
      <img src="/undraw_online_test_re_kyfx.svg" className="banner" alt="quiz img"></img>



    </div>);
};
export default Home;