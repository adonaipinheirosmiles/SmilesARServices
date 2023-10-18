import {githubServices} from '../modules/github';

/**
 * Services
 * Essa constante é responsável por 
 * centralizar todas as chamadas de 
 * serviço da Smiles AR
 */
export const Services = {
  github: githubServices(),
  flights: githubServices(),
};
