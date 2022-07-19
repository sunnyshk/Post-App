import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import PostDetails from "./Components/PostDetails";
import { useEffect, useState } from "react";
import { CssBaseline, Container } from "@mui/material";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(true);
  };


 const handleClose = () =>{
  setOpen(false)
 }

  const fetchPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container>
        <PostDetails open={open} handleOpen={toggleOpen} handleClose={handleClose} />
        <PostList posts={posts} />
      </Container>
    </div>
  );
}

export default App;
