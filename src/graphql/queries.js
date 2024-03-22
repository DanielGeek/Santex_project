import { getTeamInfo as _getTeamInfo } from '../models/team';
import { getPlayersByTeam as _getPlayersByTeam } from '../models/player';

async function getTeamInfo(name) {
  return await _getTeamInfo(name);
}

async function getPlayersByTeam(teamName) {
  return await _getPlayersByTeam(teamName);
}

module.exports = {
  getTeamInfo,
  getPlayersByTeam
};
