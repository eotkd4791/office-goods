import { Applicant } from 'renderer/types/applicant';
import { HirePost } from 'renderer/types/post';
import { persistProduce } from 'renderer/utils/storeUtils';
import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface Applicants {
  [postId: HirePost['id']]: Applicant[];
}

interface ApplicantState {
  applicants: Applicants;
  setApplicants: (applicants: Applicants) => void;
  addApplicant: (postId: string, applicant: Omit<Applicant, 'id'>) => void;
  updateApplicant: (postId: string, applicantId: string, applicant: Applicant) => void;
  deleteApplicant: (postId: string, applicantId: string) => void;
}

const persistApplicantProduce = persistProduce('applicant');

const useApplicantStore = create<ApplicantState>((set) => ({
  applicants: {},
  setApplicants: (applicants) =>
    set(
      persistApplicantProduce((state) => {
        state.applicants = applicants;
      })
    ),
  addApplicant: (postId, newApplicant) =>
    set(
      persistApplicantProduce((state) => {
        if (!state.applicants) {
          state.applicants = {};
        }
        if (!state.applicants[postId]) {
          state.applicants[postId] = [];
        }
        state.applicants[postId].push({ id: uuidv4(), ...newApplicant });
      })
    ),
  updateApplicant: (postId, applicantId, applicant) =>
    set(
      persistApplicantProduce((state) => {
        if (state.applicants) {
          const indexToUpdate = state.applicants[postId]?.findIndex(({ id }) => id === applicantId);
          if (indexToUpdate) {
            state.applicants[postId][indexToUpdate] = applicant;
          }
        }
      })
    ),
  deleteApplicant: (postId, applicantId) =>
    set(
      persistApplicantProduce((state) => {
        if (state.applicants) {
          state.applicants[postId] = state.applicants[postId]?.filter(
            ({ id }) => id === applicantId
          );
        }
      })
    ),
}));

export default useApplicantStore;
