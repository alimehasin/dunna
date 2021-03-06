import firstNameFn from './first-name';
import lastNameFn from './last-name';
import type { Gender } from '../../types';

interface EmailParams {
  domain?: string;
  gender?: Gender | 'any';
}

function email({ domain = 'example.com', gender = 'any' }: EmailParams = {}) {
  const firstName = firstNameFn({ gender });
  const lastName = lastNameFn();

  return `${firstName.toLowerCase()}_${lastName.toLowerCase()}@${domain}`;
}

export default email;
