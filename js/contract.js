$(document).ready(function(){
   let web3 = new Web3(Web3.givenProvider);
   let ContractAddress = "0xad29abb318791d579433d831ed122afeaf29dcfe";
   const INT_10_POW_18 = 1000000000000000000;
   const Decimals = 1000000000000000000;
   let contract = new web3.eth.Contract(abi,ContractAddress);
   $("#submit").on("click",function(){
      var value = $("#address").val();
      let walletAddress = value;
      contract.methods.balanceOf(walletAddress).call().then(e => {
         var result = parseFloat(parseFloat(e)/Decimals).toFixed(3);
         $("#reward").html(formatNumber(result));
         // console.log(e);
      })
   });;
});
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}