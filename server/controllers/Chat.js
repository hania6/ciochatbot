const AssistantV1 = require("watson-developer-cloud/assistant/v1");
var Cloudant = require("cloudant");
const Credentials = require("../../config/config");
const ChartsData = require("../models/ChartData");
const chart = require("../models/chart.json");

let wastonAssistant = new AssistantV1({
  version: "2018-07-06",
  username: Credentials.WA_username,
  password: Credentials.WA_password,
  url:"https://gateway-fra.watsonplatform.net/assistant/api"
});

//NEW CODE
var dbCredentials = {
  dbName: "questions_db"
};

var db;

function initDBConnection() {
  //When running on Bluemix, this variable will be set to a json object
  //containing all the service credentials of all the bound services
  var cloudant;
  if (process.env.VCAP_SERVICES) {
  //  var cloudant = new Cloudant({ url: 'https://examples.cloudant.com', plugins: { iamauth: { iamApiKey: 'xxxxxxxxxx' } } });

//   cloudant = Cloudant({ vcapInstanceName: 'cloudantNoSQLDB', vcapServices: JSON.parse(process.env.VCAP_SERVICES) });

  //dbCredentials.url = (process.env.VCAP_SERVICES.cloudant_url);
    dbCredentials.url =
      "https://821b2374-dd44-43a6-bb34-e7cfbd9daf6e-bluemix:22ab406ca4fd656bd5240e67ed6471c90d1b1683a96f62e4b433cf0b4debb95a@821b2374-dd44-43a6-bb34-e7cfbd9daf6e-bluemix.cloudant.com";
  } else {
    //When running locally, the VCAP_SERVICES will not be set

    dbCredentials.url =
      "https://821b2374-dd44-43a6-bb34-e7cfbd9daf6e-bluemix:22ab406ca4fd656bd5240e67ed6471c90d1b1683a96f62e4b433cf0b4debb95a@821b2374-dd44-43a6-bb34-e7cfbd9daf6e-bluemix.cloudant.com";
//cloudant = require("cloudant")(dbCredentials.url);
  }

cloudant = require("cloudant")(dbCredentials.url);

  // check if DB exists if not create
  cloudant.db.create(dbCredentials.dbName, function(err, res) {
    if (err) {
      console.log(
        "Could not create new db: " +
          dbCredentials.dbName +
          ", it might already exist."
      );
    }
  });

  db = cloudant.use(dbCredentials.dbName);

  // for (let [k, v] of ChartsData) {
  //   console.log(k);
  //   var obj = {"type":k,"answers":v}
  //
  // //inserting
  //         db.insert(obj, function(err, data) {
  //       		if (err) {
  //             console.log("ERROR");
  //       		//	console.log(err);
  //       			return;
  //       		}
  //
  //       		console.log("DONE");
  //       	});
  //
  //   console.log(obj);
  // }
}

initDBConnection();
function addChartData(){
  for (let [k, v] of ChartsData) {
    console.log(k);
    var obj = {"type":k,"answers":v}

  //inserting
          db.insert(obj, function(err, data) {
        		if (err) {
              console.log("ERROR");
        		//	console.log(err);
        			return;
        		}

        		console.log("DONE");
        	});

    console.log(obj);
  }
}
function updateChartData(question, answer) {
  // for (let [k, v] of ChartsData) {
  //   console.log(k);
  //   var obj = {"type":k,"answers":v}
  //
  // //inserting
  //         db.insert(obj, function(err, data) {
  //       		if (err) {
  //             console.log("ERROR");
  //       		//	console.log(err);
  //       			return;
  //       		}
  //
  //       		console.log("DONE");
  //       	});
  //
  //   console.log(obj);
  // }
  return new Promise((resolve, reject) => {
    console.log(question);
    var query = {
      selector: {
        type: question
      }
    };

    db.find(query, function(err, data) {
      console.log("Query");
      if (err) console.log(err);
      console.log(data);
        for (var i = 0; i < data.docs[0].answers.length; i++) {

          if (data.docs[0].answers[i].name == answer) {
            console.log("FOUND");
            data.docs[0].answers[i].value = data.docs[0].answers[i].value + 1;
            console.log(data.docs[0].answers[i].value);

            db.insert(data.docs[0], function(err, body) {
              if (!err) {
                resolve(body);
              } else {
                reject(err);
              }
            });
          }
          else {
            console.log("NOT FOUND");

            resolve("null");
          }
        }

      //    for (var i = 0; i < data.docs.length; i++) {
      //  console.log(data.docs[i]);

      //       for (var j = 0; j < data.docs[i].length; j++) {
      //         if (data.docs[i].answers[j].name == answer) {
      // console.log("entered check");
      //
      //
      //           data.docs[i].answers[j].value = 1 + data.docs[i].answers[j].value;
      //
      //     console.log("NEW VALUE "+data.docs[i].answers[j].value );
      //
      //           db.insert(data.docs[i], function(err, body) {
      //             if (!err) {
      //               console.log(body);
      //           }else {
      //             console.log(err);
      //           }
      //         });
      //
      //           break;
      //         }
      //       }
      //    }
      //update value

      // data.docs[0].answers[0].value=data.docs[0].answers[0].value+1
      // console.log(data.docs[0].answers[0].value);

      //re-insert
    });
  });

  // db.find(query, function(err, data) {
  //   console.log("New");
  //   console.log(data.docs);
  // });
}
//Uncoment to add data but if useing my creds leave commented 
//addChartData();

//END OF NEW CODE

exports.sendMessage = function(req, res, next) {
  wastonAssistant.message(
    {
      workspace_id: Credentials.WA_workspace_id,
      input: { text: req.body.message },
      context: req.body.context
    },
    (err, response) => {
      if (err) {
        next(err);
      } else {
        console.log("response: ");
        console.log(response);
        //console.log(db);
        //  console.log(response.context.system);
        let chartData = [];
        if (response.entities.length > 0) {
          var filteredEntities = [];
          filteredEntities = response.entities.filter(
            entity =>
              entity.entity !== "cio_confirmation" &&
              entity.entity !== "insights_confirmation" &&
              entity.entity !== "sys-person"
          );
          if (filteredEntities.length > 0 && response.context.graph) {
            // TODO: Add, update database reference
            //answer req.body.message
            // console.log("FILTERED");
            // console.log(filteredEntities);
            // updateChartData(filteredEntities[0].entity, req.body.message)
            // .then(
            //   body => {
            //     if(body!="null"){
            //       var query = {
            //         selector: {
            //           id: body.id
            //         }
            //       };
            //       var cdata = [];
            //       db.find(query, function(err, data) {
            //         console.log("NEW Data");
            //         console.log(data.docs[0]);
            //
            //         cdata = data.docs[0].answers;
            //         res.json({
            //           response: response.output.text,
            //           context: response.context,
            //           chartData: cdata
            //         });
            //       });
            //     }
            //
            //   }
            // ).catch(err=>{
            //   console.log(err);
            // });


            console.log(filteredEntities[0].entity);
            var query = {
              selector: {
                type: filteredEntities[0].entity
              }
            };
            var found=true;
            var an="";
            db.find(query, function(err, data) {
              console.log("Query");
              if (err) console.log(err);
              console.log(data);
                for (var i = 0; i < data.docs[0].answers.length; i++) {

                  if (data.docs[0].answers[i].name == req.body.message) {
                    console.log("FOUND");
                    data.docs[0].answers[i].value = data.docs[0].answers[i].value + 1;
                    an=data.docs[0].answers[i].value;
                    console.log(data.docs[0].answers[i].value);

                    db.insert(data.docs[0], function(err, body) {
                      if (!err) {
                        console.log(body);

                        var query = {
                                selector: {
                                  type: filteredEntities[0].entity
                                }
                              };
                              var cdata = [];
                              db.find(query, function(err, data) {



                                console.log("NEW Data");
                                console.log(data);

                                cdata = data.docs[0].answers;
                                var answer= response.output.text[0].replace("[Answer]",an);
                                console.log("new response "+response.output.text[0]);
                                an="";
                                response.output.text[0]=answer;
                                res.json({
                                  response: response.output.text,
                                  context: response.context,
                                  chartData: cdata
                                });
                              });



                      } else {
                        console.log(err);
                      }
                    });
found=true;
                    break;
                  }
                  else {
                    console.log("NOT FOUND");
                    found = false;


                    //resolve("null");
                  }
                }
                if(!found){
                  res.json({
                    response: response.output.text,
                    context: response.context,
                    chartData: []
                  });
                }

});











            //  chartData = ChartsData.get(filteredEntities[0].entity);
            //console.log(chartData);
          } else {
            res.json({
              response: response.output.text,
              context: response.context,
              chartData: []
            });
          }
        } else {
          res.json({
            response: response.output.text,
            context: response.context,
            chartData: []
          });
        }
      }
    }
  );
};
