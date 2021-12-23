let data = [
    { id: "1", ApiTitle: "Ahmad Saleh", bodyApi: "age 21" },
    { id: "2", ApiTitle: "Mohammed Ali", bodyApi: "age is 23" },
    { id: "3", ApiTitle: "Mohammed Hammouda", bodyApi: "age 22" },
    { id: "4", ApiTitle: "Mohammed Awad", bodyApi: "age 22" },
  ];
  
  export const getListOfPosts = async (req, res) => {
    res.status(200).json({ posts: data });
  };
  
  export const getPostSpec = async (req, res) => {
    const post = data.find((post) => post.id === req.params.id);
    if (post) {
      res.status(200).json({ post });
    } else {
      res.status(404).json({ message: "Error 404 post is not found" });
    }
  };
  export const newPost = async (req, res) => {
    const { ApiTitle, bodyApi } = req.bodyApi;
    const id = Math.floor(Math.random() * 320254).toString();
    data.push({ ApiTitle, bodyApi, id });
    res.status(201).json({ ApiTitle, bodyApi, id });
  };
  
  export const updatePost = async (req, res) => {
    const post = data.find((post) => post.id === req.params.id);
    if (post) {
      const { ApiTitle, bodyApi } = req.bodyApi;
      data.map((item) => {
        if (item.id === req.params.id) {
          item.ApiTitle = ApiTitle;
          item.bodyApi = bodyApi;
          res.status(200).json(item);
        }
      });
    } else {
      res.status(404).json({ message: "Error 404 Post is not found" });
    }
  };
  
  export const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = data.find((post) => post.id === id);
    if (post) {
      console.log(post);
      console.log(data.filter((item) => item.id !== id));
      data = data.filter((item) => item.id !== id);
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "error 404 Post is not found" });
    }
  };