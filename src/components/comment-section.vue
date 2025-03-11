<template>
  <div class="comment-container max-w-[1280px] mx-auto py-[60px] p-[20px]">
    <div class="flex flex-col md:flex-row gap-20">
      <div class="w-full md:w-1/2 max-h-[400px] flex flex-col justify-between">
        <div class="header-section">
          <h1 class="text-start text-[20px] md:text-[32px]">Post A Comment</h1>
          <p class="text-[14px] md:text-[16px] py-[10px] text-left max-w-[400px]">
            We would like to hear from you. Share your experience with us below:
          </p>
        </div>
    
        <div v-if="user" class="user-info flex items-center gap-[10px] mb-[20px]">
          <img class="rounded-[50%] w-[50px] h-[50px]" :src="user.picture" alt="User profile picture" />
          <p>Welcome, {{ user.name }}</p>
        </div>
        
        <div class="comment-section flex flex-col justify-start gap-[10px] mb-[20px]">
          <div class="rate-section flex items-center gap-[5px]">
            <span v-for="star in 5" :key="star" @click="setRating(star)" class="star" :class="{ 'text-yellow-500': star <= rating }">★</span>
          </div>
          <input v-model="comment" placeholder="Enter your comment" class="usercomment text-wrap" />
          <div class="flex flex-col items-start">
            <button class="px-6 py-2 bg-black text-white rounded-[5px]" @click="addComment" :disabled="!user || !comment">Publish</button>
          </div>
        </div>

        <div class="sign-in-btn-container sticky-bottom flex flex-col gap-[10px] justify-start mb-[20px]">
          <p class="text-[12px] text-left text-[#8f8f8f]">Sign In before you can leave a comment</p>
          <div class="max-w-[200px]" id="google-signin-btn"></div>
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <div class="comments max-h-[400px] mt-[60px] overflow-scroll">
          <div 
              v-for="(comment, index) in sortedComments" 
              :key="index" 
              class="comment flex flex-col gap-[10px] p-[10px] border-b"
            >
            <div class="flex items-center gap-[10px]">
              <img 
                :src="comment.picture" 
                class="rounded-[50%] w-[40px] h-[40px]"
                alt="User profile picture" />
              <div class="text-start">
                <h3>{{ comment.name }}</h3>
                <p>{{ comment.text }}</p>
                <small>{{ new Date(comment.date).toLocaleString() }}</small>
              </div>
            </div>
            <div class="likes-rate flex items-center gap-[10px]">
              <button @click="likeComment(index)">👍 {{ comment.likes }}</button>
              <span>Rating: {{ comment.rating }} ★</span>
              <template v-if="user && user.email === comment.email">
                <button @click="editComment(index)">Edit</button>
                <button @click="deleteComment(index)">Delete</button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Badge",
  data() {
    return {
      user: null,
      comment: "",
      rating: 0,
      comments: JSON.parse(localStorage.getItem("comments")) || []
    };
  },
  computed: {
    sortedComments() {
      return this.comments.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
    loadGoogleScript() {
      if (document.getElementById("google-signin-script")) return;

      const script = document.createElement("script");
      script.id = "google-signin-script";
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = this.initializeGoogleSignIn;
      script.onerror = () => {
        console.error("Failed to load Google API.");
      };
      document.head.appendChild(script);
    },

    initializeGoogleSignIn() {
      if (!window.google) {
        console.error("Google API not loaded yet.");
        return;
      }

      window.google.accounts.id.initialize({
        client_id: "27939649771-jkokb27vc97cpvneu2jphgg89av223n4.apps.googleusercontent.com",
        callback: this.handleCredentialResponse
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-btn"),
        { theme: "outline", size: "large" }
      );
    },

    handleCredentialResponse(response) {
      const idToken = response.credential;
      fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + idToken)
        .then(res => res.json())
        .then(data => {
          this.user = {
            name: data.name,
            email: data.email,
            picture: data.picture
          };
        })
        .catch(err => console.error("Failed to fetch Google user data:", err));
    },

    addComment() {
      if (!this.user || !this.comment.trim()) return;

      const newComment = {
        name: this.user.name,
        email: this.user.email,
        picture: this.user.picture,
        text: this.comment.trim(),
        rating: this.rating,
        likes: 0,
        date: new Date().toISOString()
      };

      this.comments.unshift(newComment);
      localStorage.setItem("comments", JSON.stringify(this.comments));
      this.comment = "";
      this.rating = 0; // Reset the rating
    },

    likeComment(index) {
      this.comments[index].likes++;
      localStorage.setItem("comments", JSON.stringify(this.comments));
    },

    editComment(index) {
      const updatedComment = prompt("Edit your comment:", this.comments[index].text);
      if (updatedComment) {
        this.comments[index].text = updatedComment;
        localStorage.setItem("comments", JSON.stringify(this.comments));
      }
    },

    deleteComment(index) {
      this.comments.splice(index, 1);
      localStorage.setItem("comments", JSON.stringify(this.comments));
    }
  },
  mounted() {
    this.loadGoogleScript();
  }
};
</script>

<style scoped>
.usercomment {
  padding: 10px;
  border: 1px solid #ccc;
}

.comment {
  border-bottom: 1px solid #ccc;
}

.star {
  cursor: pointer;
}
</style>
