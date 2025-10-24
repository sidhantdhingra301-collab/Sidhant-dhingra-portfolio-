import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectState {
  likes: number;
  dislikes: number;
  userAction: 'liked' | 'disliked' | null;
}

interface ProjectsState {
  [key: string]: ProjectState;
}

const initialState: ProjectsState = {
  venkateshwar: { likes: 0, dislikes: 0, userAction: null },
  plugdworks: { likes: 0, dislikes: 0, userAction: null },
  nurrabay: { likes: 0, dislikes: 0, userAction: null },
  arihant: { likes: 0, dislikes: 0, userAction: null },
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const project = state[action.payload];
      if (project.userAction === 'liked') {
        project.likes -= 1;
        project.userAction = null;
      } else {
        if (project.userAction === 'disliked') {
          project.dislikes -= 1;
        }
        project.likes += 1;
        project.userAction = 'liked';
      }
    },
    toggleDislike: (state, action: PayloadAction<string>) => {
      const project = state[action.payload];
      if (project.userAction === 'disliked') {
        project.dislikes -= 1;
        project.userAction = null;
      } else {
        if (project.userAction === 'liked') {
          project.likes -= 1;
        }
        project.dislikes += 1;
        project.userAction = 'disliked';
      }
    },
  },
});

export const { toggleLike, toggleDislike } = projectsSlice.actions;
export default projectsSlice.reducer;
