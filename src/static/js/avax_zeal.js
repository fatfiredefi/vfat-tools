
$(function() {
consoleInit(main)
  });

const WING_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_wing","internalType":"contract WingCoin"},{"type":"address","name":"_devaddr","internalType":"address"},{"type":"address","name":"_feeAddress","internalType":"address"},{"type":"uint256","name":"_startTime","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RewardLockedUp","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amountLockedUp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetDevAddress","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetFeeAddress","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"UpdateEmissionRate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"wingPerSecond","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateStartTime","inputs":[{"type":"uint256","name":"newStartTime","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"WingMintError","inputs":[{"type":"bytes","name":"reason","internalType":"bytes","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"addPool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"address","name":"lpToken","internalType":"address","indexed":false},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"uint256","name":"depositFeeBP","internalType":"uint256","indexed":false},{"type":"uint256","name":"harvestInterval","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"setPool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"address","name":"lpToken","internalType":"address","indexed":false},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"uint256","name":"depositFeeBP","internalType":"uint256","indexed":false},{"type":"uint256","name":"harvestInterval","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"EMISSION_RATE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MAXIMUM_HARVEST_INTERVAL","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MAX_EMISSION_RATE","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IBEP20"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint256","name":"_harvestInterval","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"time","internalType":"uint256"}],"name":"blockTimestamp","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"canHarvest","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devaddr","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeAddress","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingWing","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"poolExistence","inputs":[{"type":"address","name":"","internalType":"contract IBEP20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IBEP20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardSecond","internalType":"uint256"},{"type":"uint256","name":"accWingPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"},{"type":"uint256","name":"harvestInterval","internalType":"uint256"},{"type":"uint256","name":"lpSupply","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint256","name":"_harvestInterval","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevAddress","inputs":[{"type":"address","name":"_devaddr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFeeAddress","inputs":[{"type":"address","name":"_feeAddress","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startTime","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_wingPerSecond","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateStartTime","inputs":[{"type":"uint256","name":"_newStartTime","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"},{"type":"uint256","name":"rewardLockedUp","internalType":"uint256"},{"type":"uint256","name":"nextHarvestUntil","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"userPoolLockup","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract WingCoin"}],"name":"wing","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"wingPerSecond","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

   const WING_CHEF_ADDR = "0xe7Cf96eDe0b249ab5Febc2caaA3a501572B493cd";

   const rewardTokenTicker = "WING";
   const WING_CHEF = new ethers.Contract(WING_CHEF_ADDR, WING_CHEF_ABI, App.provider);

   let rewardsPerWeek = 0
   const startTime = await WING_CHEF.startTime();
   const currentTime = Date.now() / 1000;

   if(startTime > currentTime){
    _print(`Rewards have not started yet\n`);
   }else{
    rewardsPerWeek = await WING_CHEF.wingPerSecond() /1e18 * 604800;
   }

    const tokens = {};
    const prices = await getAvaxPrices();

    await loadAvaxChefContract(App, tokens, prices, WING_CHEF, WING_CHEF_ADDR, WING_CHEF_ABI, rewardTokenTicker,
      "wing", null, rewardsPerWeek, "pendingWing");

    hideLoading();
  }
