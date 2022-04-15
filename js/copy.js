function copyText() {
    var agentsName = document.getElementById("agentName").value;
    var cName = document.getElementById("custName").value;
    var cEmail = document.getElementById("custEmail").value;
    var cPhone = document.getElementById("custPhone").value;
    var cID = document.getElementById("custID").value;
    var cAffectedNumber = document.getElementById("affectedNumbers").value;
    var cAffectedExt = document.getElementById("affectedExt").value;
    var cIssueDescription = document.getElementById("issueDescription").value;
    var cTroubleshooting = document.getElementById("troubleshootingDone").value;

    var e = document.getElementById("callOrSMS");
    var resultcs = e.options[e.selectedIndex].text;

    var cExamples = document.getElementById("examples").value;
    var cApproved = document.getElementById("escalationApprovedBy").value;
    
    var today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});


    document.getElementById("temp").value =

    "---Agents name---\n" + agentsName + " | " + today + 
    "\nCaller's Name: " + cName + 
    "\nCaller's Email: " + cEmail +
    "\nCall Back Phone #: " + cPhone +
    "\nCustomer ID: " + cID +
    "\n\nAffected Phone Number(s): " + cAffectedNumber + 
    "\nAffected Extension Number (If Applicable): " + cAffectedExt +
    "\nBrief description of the issue:\n" + cIssueDescription +
    "\nTroubleshooting done:\n" + cTroubleshooting + 
    "\nCall or SMS Issue? " + resultcs + 
    "\n\n--Examples--" + 
    "\n" + cExamples +
    "\n\nEscalation Approved by: " + cApproved;

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}