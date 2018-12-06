import { ExperienceInterface } from './experience.interface';
import { EducationInterface } from './education.interface';
import { AchievementsInterface } from './achievements.interface';
import { ContactsInterface } from './contacts.interface';
import { SkillsInterface } from './skills.interface';

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  birth: string;
  location: string;
  maritalStatus: string;
  languages: string;
  salaryExpectations: string;
  summary: string;
  contacts: ContactsInterface;
  experience: ExperienceInterface[];
  education: EducationInterface[];
  achievements: AchievementsInterface[];
  skills: SkillsInterface;
}
