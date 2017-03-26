angular.module('Honeypot.controllers')
  .controller('CustomerController',
    ['$scope', '$state','DemoService', 'DataService', 'GraphService', '$uibModal',
      function($scope, $state, DemoService, DataService, GraphService, $uibModal) {

        $scope.cc = {}

        $scope.options_retention = GraphService.chart_retention()
        $scope.options_breakdown = GraphService.chart_retention()


        $scope.calcTotal = function(filtered){
          if(filtered) {
           var sum = 0;
           for(var i = 0 ; i<filtered.length ; i++){
              sum = sum + filtered[i].total;
           }
           return sum;
         }
        };

        add_data_entry_anchor = function() {
          total_engagements = 0
          _.each($scope.posts.posts, function(a){
            if(a.id!='') {
              _.each(a.info, function(b){
                if(b.label == 'likes') {
                  a.likes = b.value
                }
                else if(b.label == 'comments') {
                  a.comments = b.value
                }
                else {
                  a.shares = b.value
                }
              });

              total_engagements = total_engagements + a.total

              a.engaged_users = a.comparative[0].value
              a.retention = a.comparative[1].value

              a.negative = 0
              a.positive = 0
              _.each(a.reactions, function(react) {
                if(react.label == 'SAD' || react.label == 'ANGRY') {
                  a.negative = a.negative + react.value
                }
                else {
                  a.positive = a.positive + react.value
                }
              })

              a.overall_sentiment = a.positive - a.negative

              _.each(a.comparative, function(compa) {
                a[compa["label"]] = compa.value
              })
            }
          });
          $scope.posts.total_engagements = total_engagements
        }

        add_data_entry_competitor = function() {
          total_engagements = 0
          _.each($scope.posts_mcdo.posts, function(a){
            if(a.id!='') {
              _.each(a.info, function(b){
                if(b.label == 'likes') {
                  a.likes = b.value
                }
                else if(b.label == 'comments') {
                  a.comments = b.value
                }
                else {
                  a.shares = b.value
                }
              });
              total_engagements = total_engagements + a.total
              a.engaged_users = a.comparative[0].value
              a.retention = a.comparative[1].value
              a.negative = 0
              a.positive = 0
              _.each(a.reactions, function(react) {
                if(react.label == 'SAD' || react.label == 'ANGRY') {
                  a.negative = a.negative + react.value
                }
                else {
                  a.positive = a.positive + react.value
                }
              })
              a.overall_sentiment = a.positive - a.negative

              _.each(a.comparative, function(compa) {
                a[compa["label"]] = compa.value
              })
          }
          });

          $scope.posts_mcdo.total_engagements = total_engagements
        }

        if($state.current.name==='customer.jollibee' || $scope.header === 'Jollibee Chicken Analytics Report') {

          $scope.pages = [
            {
              "name": "Mcdo",
              "page_id": 121863347862934,
              "title": "McDo Chicken Campaigns"
            },
            {
              "name": "KFC",
              "page_id": 117373194958135,
              "title": "KFC Campaigns"
            },
          ]

          $scope.pages_comparative = [
            {
              "name": "Jollibee",
              "page_id": 170055766373991,
              "title": "Jollibee Campaigns"
            },
            {
              "name": "Mcdo",
              "page_id": 121863347862934,
              "title": "McDo Campaigns"
            },
            {
              "name": "KFC",
              "page_id": 117373194958135,
              "title": "KFC Campaigns"
            }
          ]


          $scope.navbarOptions = [{"label": 'Basic Analytics', 'link':'customer.jollibee' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'}]

          $scope.header = 'Jollibee Chicken Analytics Report'


          p = {
            "word": "chicken",
            "page_name": "JollibeePhilippines",
            "token": "hello",
            "name": "Jollibee",
            "page_id": 170055766373991,
            "time_id": 38,
          }


          z = {
            "word": "chicken",
            "page_name": "McDo.ph",
            "token": "hello",
            "name": "McDo",
            "page_id": 121863347862934,
            "time_id": 38,
          }

          $scope.link_back = 'customer.jollibee'

        }
        else if($state.current.name==='customer.cloudfonev2' || $scope.header === 'Cloudfone Campaign Analysis'  || $state.current.name==='customer.test') {
          $scope.header = 'Cloudfone Campaign Analysis'
          $scope.link_back = 'customer.cloudfonev2'

          $scope.cc = {}
          $scope.ac = {}

          $scope.pages_comparative = [
            {
              "name": "Cloudfone",
              "page_id": 240504995982752,
            },
            {
              "name": "Cherry",
              "page_id": 269510017442,
            },
            {
              "name": "Starmobile",
              "page_id": 138778092890671,
            },
            {
              "name": "MyPhone",
              "page_id": 135282306512042,
            },
            {
              "name": "Oppo",
              "page_id": 257444391083999,
            },
            {
              "name": "Vivo",
              "page_id": 168304956879979,
            },
            {
              "name": "Firefly",
              "page_id": 730434647063787,
            },
            {
              "name": "Asus",
              "page_id": 272213024956,
            },
            {
              "name": "Torque",
              "page_id": 112614355435400,
            },
            {
              "name": "Lenovo",
              "page_id": 153636428064339,
            },
            {
              "name": "Agila Rewards",
              "page_id": 1786114878323818,
            },
            {
              "name": "Samsung",
              "page_id": 146941488726138,
            },
            {
              "name": "Vuewin",
              "page_id": 474969859307983,
            },
          ]

          $scope.pages = [
            {
              "name": "Cherry Mobile",
              "page_id": 269510017442,
              "title": "Cherry Campaigns",
            },
            {
              "name": "Starmobile",
              "page_id": 138778092890671,
              "title": "Starmobile Campaigns",
            },
            {
              "name": "myPhone",
              "page_id": 135282306512042,
              "title": "MyPhone Campaigns",
            },
            {
              "name": "Agila Rewards",
              "page_id": 1786114878323818,
              "title": "Agila Campaigns",
            },
            {
              "name": "Oppo",
              "page_id": 257444391083999,
              "title": "Oppo Campaigns",
            },
            {
              "name": "Vivo",
              "page_id": 168304956879979,
              "title": "Vivo Campaigns",
            },
            {
              "name": "Firefly",
              "page_id": 730434647063787,
              "title": "Firefly Campaigns",
            },
            {
              "name": "Asus",
              "page_id": 272213024956,
              "title": "Asus Campaigns",
            },
            {
              "name": "Torque",
              "page_id": 112614355435400,
              "title": "Torque Campaigns",
            },
            {
              "name": "Lenovo",
              "page_id": 153636428064339,
              "title": "Lenovo Campaigns",
            },
            {
              "name": "Samsung",
              "page_id": 146941488726138,
              "title": "Samsung Campaigns",
            },
            {
              "name": "Vuewin",
              "page_id": 474969859307983,
              "title": "Vuewin Campaigns",
            },
          ]

          $scope.page = $scope.pages[0]

          $scope.header = 'Cloudfone Analytics Report'
          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.cloudfonev2' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]
          if($state.current.name==='customer.test') {
            $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.test' },
                                    {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                    {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]
          }

          loyalty = 'multiBarHorizontalChart'

          p = {
            "page_name": "CloudfonePhilippines",
            "name": "Cloudfone",
            "page_id": 240504995982752,
            "time_id": 40
          }


          z = {
            "page_name": "Cherry",
            "name": "Cherry",
            "page_id": 474969859307983,
            "time_id": 40
          }



        }
        else if($state.current.name==='customer.goldilocks') {
          $scope.header = 'Goldilocks Campaign Analysis'
          $scope.link_back = 'customer.goldilocks'

          $scope.cc = {}
          $scope.ac = {}

          $scope.pages_comparative = [
            {
              "name": "Goldilocks",
              "page_id": 81789923849,
              "time_id": 38,
              "month": "December",
              "value": "GoldilocksPH"
            },
            {
              "name": "Jollibee",
              "page_id": 170055766373991,
              "time_id": 38,
              "month": "December",
              "value": "JollibeePhilippines"
            },
            {
              "name": "Mcdo",
              "page_id": 121863347862934,
              "time_id": 38,
              "month": "December",
              "value": "McDo.ph"
            },
            {
              "name": "KFC",
              "page_id": 117373194958135,
              "time_id": 38,
              "month": "December",
              "value": "kfcphilippines"
            },
            {
              "name": "Red Ribbon",
              "page_id": 135469913163264,
              "time_id": 38,
              "month": "December",
              "value": "redribbonbakeshop"
            }
          ]

          $scope.pages = [
            {
              "name": "Red Ribbon",
              "page_id": 135469913163264,
              "time_id": 38,
              "month": "December",
              "title": "Red Ribbon Campaigns",
            },
            {
              "name": "Jollibee",
              "page_id": 170055766373991,
              "time_id": 38,
              "month": "December",
              "title": "Jollibee Campaigns",
            },
            {
              "name": "Mcdo",
              "page_id": 121863347862934,
              "time_id": 38,
              "month": "December",
              "title": "Mcdo Campaigns",
            },
            {
              "name": "KFC",
              "page_id": 117373194958135,
              "time_id": 38,
              "month": "December",
              "title": "KFC Campaigns",
            },
          ]
          $scope.page = $scope.pages[0]

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.goldilocks' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

          loyalty = 'multiBarHorizontalChart'

          p = {
            "name": "Goldilocks",
            "page_id": 81789923849,
            "time_id": 38,
            "month": "December",
            "title": "Goldilocks Campaigns",
          }


          z = {
            "name": "Red Ribbon",
            "page_id": 135469913163264,
            "time_id": 38,
            "month": "December",
            "title": "Red Ribbon Campaigns",
          }

        }

        else if($state.current.name==='customer.bos') {

          $scope.header = 'Bos Campaign Analysis'
          $scope.link_back = 'customer.bos'


          $scope.cc = {}
          $scope.ac = {}

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.bos' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}
                                ]

          $scope.pages = [
            {
              "name": "Seatlles",
              "page_id": 329013213099,
              "title": "Seatlles Campaigns"
            }
          ]

          $scope.page = $scope.pages[0]

          $scope.pages_comparative = [
            {
              "name": "Bo's Coffee",
              "page_id": 125804333461,
            },
            {
              "name": "Seatlles",
              "page_id": 329013213099,
            }
          ]

          p = {
            "page_name": "Bo's Coffee",
            "name": "Bo's Coffee",
            "page_id": 125804333461
          }


          z = {
            "page_name": "Seatlle's Best",
            "name": "Seatlle's Best",
            "page_id": 329013213099
          }
        }

        else if($state.current.name==='customer.myanmar') {


          $scope.pages = [
            {
              "name": "Telenor",
              "page_id": 603742072992573,
              "title": "Telenor Campaigns"
            },

            {
              "page_name": "Ooredoo",
              "name": "OoredooMyanmar",
              "page_id": 395256057264307,
              "title": "Ooredoo Campaigns",
            }
          ]

          $scope.pages_comparative = [
            {
              "name": "mptofficial",
              "page_id": 567975259969891,
              "title": "mptofficial Campaigns",
              "time_id": 35,
              "month": "October"
            },
            {
              "name": "Telenor",
              "page_id": 603742072992573,
              "title": "Telenor Campaigns",
              "time_id": 35,
              "month": "October"
            },

            {
              "name": "OoredooMyanmar",
              "page_id": 395256057264307,
              "title": "Ooredoo Campaigns",
              "time_id": 35,
              "month": "October"
            }
          ]

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.myanmar' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  // {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}
                                  ]

          $scope.header = 'MPT Analytics Report'


          p = {
            "name": "mptofficial",
            "page_id": 567975259969891,
            "title": "mptofficial Campaigns"
          }


          z = {
            "page_name": "Telenor",
            "name": "TelenorMyanmar",
            "page_id": 603742072992573,
            "title": "Telenor Campaigns",
          }

          $scope.link_back = 'customer.myanmar'
        }

        else if($state.current.name==='customer.air21') {


          $scope.pages = [
            {
              "name": "LBC",
              "page_id": 107092956014139,
              "title": "LBC Campaigns",
              "time_id": 35
            },

            {
              "name": "2GO Express",
              "page_id": 228290047250967,
              "title": "2GO Express"
            }
          ]

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.air21' },
                                  // {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  // {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}
                                ]

          $scope.header = 'Air21 Analytics Report'


          p = {
            "name": "Air21",
            "page_id": 245947219824,
            "title": "Air21 Campaigns",
            "time_id": 35
          }


          z = {
            "name": "LBC",
            "page_id": 107092956014139,
            "title": "LBC Campaigns",
            "time_id": 35

          }

          $scope.link_back = 'customer.LBC'
        }

        else if($state.current.name==='customer.ceelin') {


          $scope.pages = [
            {
              "name": "Potencee",
              "page_id": 137616369642530,
              "title": "Potencee Campaigns"
            },
          ]

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.ceelin' },
                                  // {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  // {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}
                                ]

          $scope.header = 'Ceelin Analytics Report'


          p = {
            "name": "Ceelin",
            "page_id": 491855707493928,
            "title": "Ceelin Campaigns"
          }


          z = {
            "name": "Potencee",
            "page_id": 137616369642530,
            "title": "Potencee Campaigns"
          }

          $scope.link_back = 'customer.ceelin'
        }

        else if($state.current.name==='customer.vivo' || $scope.header === 'Vivo Campaign Analysis'  || $state.current.name==='customer.test') {
          $scope.header = 'Vivo Campaign Analysis'
          $scope.link_back = 'customer.vivo'

          $scope.cc = {}
          $scope.ac = {}

          $scope.pages_comparative = [
            {
              "name": "Vivo",
              "page_id": 168304956879979,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Cloudfone",
              "page_id": 240504995982752,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Cherry",
              "page_id": 269510017442,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Starmobile",
              "page_id": 138778092890671,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "MyPhone",
              "page_id": 135282306512042,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Oppo",
              "page_id": 257444391083999,
              "time_id": 37,
              "month": "November"
            },
          ]

          $scope.pages = [
            {
              "name": "Cherry Mobile",
              "page_id": 269510017442,
              "title": "Cherry Campaigns"
            },
            {
              "name": "Cloudfone",
              "page_id": 240504995982752,
              "title": "Cloudfone Campaigns"
            },
            {
              "name": "Starmobile",
              "page_id": 138778092890671,
              "title": "Starmobile Campaigns"
            },
            {
              "name": "myPhone",
              "page_id": 135282306512042,
              "title": "MyPhone Campaigns"
            },
            {
              "name": "Oppo",
              "page_id": 257444391083999,
              "title": "Oppo Campaigns"
            },
          ]

          $scope.page = $scope.pages[0]

          $scope.header = 'Vivo Analytics Report'
          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.vivo' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

          loyalty = 'multiBarHorizontalChart'

          p = {
            "page_name": "Vivo",
            "name": "Vivo",
            "page_id": 168304956879979,
            "time_id": 37
          }


          z = {
            "page_name": "Cherry",
            "name": "Cherry",
            "page_id": 269510017442,
            "time_id": 37
          }
        }


        else if($state.current.name==='customer.indonesia') {

          $scope.cc = {}
          $scope.ac = {}

          $scope.pages = [
            {
              "name": "Telkomsel",
              "page_id": 157697287618387,
              "title": "Telkomsel Campaigns",
            },
            {
              "name": "3Indonesia",
              "page_id": 28724388557,
              "title": "3Indonesia Campaigns",
            }
          ]
          $scope.page = $scope.pages[0]

          $scope.pages_comparative = [
            {
              "page_name": "Im3 Ooredoo",
              "name": "Im3 Ooredoo",
              "page_id": 39935792947,
              "title": "Im3 Ooredoo Campaigns",
              "time_id": 35,
              "month": "October"
            },
            {
              "name": "Telkomsel",
              "page_id": 157697287618387,
              "title": "Telkomsel Campaigns",
              "time_id": 35,
              "month": "October"
            },
            {
              "name": "3Indonesia",
              "page_id": 28724388557,
              "title": "3Indonesia Campaigns",
              "time_id": 35,
              "month": "October"
            }
          ]

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.indonesia' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}
                                  ]

          $scope.header = 'Im3Ooredoo Analytics Report'


          p = {
            "page_name": "Im3 Ooredoo",
            "name": "Im3 Ooredoo",
            "page_id": 39935792947,
            "title": "Im3 Ooredoo Campaigns",
            "time_id": 35
          }


          z = {
            "name": "Telkomsel",
            "page_id": 157697287618387,
            "title": "Telkomsel Campaigns",
            "time_id": 35
          }

          $scope.link_back = 'customer.telkomsel'
        }

        else if($state.current.name==='customer.blue' || $scope.header === 'Blue Water Campaign Analysis'  || $state.current.name==='customer.test') {
          $scope.header = 'Blue Water Campaign Analysis'
          $scope.link_back = 'customer.blue'

          $scope.cc = {}
          $scope.ac = {}

          $scope.pages_comparative = [
            {
              "name": "Drink Blue",
              "page_id": 1439114389713775,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Gatorade",
              "page_id": 130641306591,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Nature Spring",
              "page_id": 148160661910345,
              "time_id": 37,
              "month": "November"
            },
          ]

          $scope.pages = [
            {
              "name": "Gatorade",
              "page_id": 130641306591,
              "title": "Gatorade Campaigns"
            },
            {
              "name": "Nature Spring",
              "page_id": 148160661910345,
              "title": "Nature Spring Campaigns"
            },
          ]

          $scope.page = $scope.pages[0]

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.blue' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

          loyalty = 'multiBarHorizontalChart'

          p = {
            "page_name": "Drink Blue",
            "name": "Blue",
            "page_id": 1439114389713775,
            "time_id": 37
          }


          z = {
            "page_name": "Gatorade",
            "name": "Gatorade",
            "page_id": 130641306591,
            "time_id": 37
          }
        }

        else if($state.current.name==='customer.555') {
          $scope.header = '555 Campaign Analysis'
          $scope.link_back = 'customer.555'

          $scope.cc = {}
          $scope.ac = {}

          $scope.pages_comparative = [
            {
              "name": "555",
              "page_id": 1635708210026542,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "San Marino Corned TUna",
              "page_id": 133002244938,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Ligo",
              "page_id": 245115288836043,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Mega Pure Tuna",
              "page_id": 1126484060702274,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Century Tuna",
              "page_id": 149833938363019,
              "time_id": 37,
              "month": "November"
            },
          ]

          $scope.pages = [
            {
              "name": "San Marino Corned TUna",
              "page_id": 133002244938,
              "title": "San Marino Campaigns"
            },
            {
              "name": "Ligo",
              "page_id": 245115288836043,
              "title": "Ligo Campaigns"
            },
            {
              "name": "Mega Pure Tuna",
              "page_id": 1126484060702274,
              "title": "Mega Pure Campaigns"
            },
            {
              "name": "Century Tuna",
              "page_id": 149833938363019,
              "title": "Century Tuna Campaigns"
            },
          ]

          $scope.page = $scope.pages[0]

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.555' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

          loyalty = 'multiBarHorizontalChart'

          p = {
            "page_name": "555",
            "name": "555",
            "page_id": 1635708210026542,
            "time_id": 37
          }


          z = {
            "page_name": "San Marino",
            "name": "San Marino Corned Tuna",
            "page_id": 133002244938,
            "time_id": 37
          }
        }

        else if($state.current.name==='customer.anlene') {
          $scope.header = 'Anlene Campaign Analysis'
          $scope.link_back = 'customer.anlene'

          $scope.cc = {}
          $scope.ac = {}

          $scope.pages_comparative = [
            {
              "name": "Anlene",
              "page_id": 122732361165370,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Bear Brand Adult Plus",
              "page_id": 351147191605084,
              "time_id": 37,
              "month": "November"
            },
          ]

          $scope.pages = [
            {
              "name": "Bear Brand Adult Plus",
              "page_id": 351147191605084,
              "title": "Bear Brand Campaigns"
            },
          ]
          $scope.page = $scope.pages[0]

          $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.anlene' },
                                  {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                  {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

          loyalty = 'multiBarHorizontalChart'

          p = {
            "page_name": "Anlene",
            "name": "Anlene",
            "page_id": 122732361165370,
            "time_id": 37
          }


          z = {
            "page_name": "Bear Brand Adult",
            "name": "Bear Brand Adult Plus",
            "page_id": 351147191605084,
            "time_id": 37
          }
        }

        else if($state.current.name==='customer.anmum') {
          $scope.header = 'Anmum Campaign Analysis'
          $scope.link_back = 'customer.anmum'

          $scope.cc = {}
          $scope.ac = {}

          $scope.pages_comparative = [
            {
              "name": "Anmum Mommy",
              "page_id": 345676952163288,
              "time_id": 37,
              "month": "November"
            },
            {
              "name": "Enfamama",
              "page_id": 228666434189650,
              "time_id": 37,
              "month": "November"
            },
          ]

          $scope.pages = [
            {
              "name": "Enfamama",
              "page_id": 228666434189650,
              "title": "Enfamama Campaigns"
            },
          ]

        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.anmum' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "page_name": "Anmum",
          "name": "Anmum Mommy",
          "page_id": 345676952163288,
          "time_id": 37
        }


        z = {
          "page_name": "Enfamma Adult",
          "name": "Enfamama",
          "page_id": 228666434189650,
          "time_id": 37
        }
      }

      else if($state.current.name==='customer.cemex') {
        $scope.header = 'Cemex Campaign Analysis'
        $scope.link_back = 'customer.cemex'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Cemex",
            "page_id": 301079556757332,
            "time_id": 37,
            "month": "November"
          },
          {
            "name": "Holcim",
            "page_id": 285979891432422,
            "time_id": 37,
            "month": "November"
          },
          {
            "name": "Republic",
            "page_id": 617280148401132,
            "time_id": 37,
            "month": "November"
          }
        ]

        $scope.pages = [
          {
            "name": "Holcim",
            "page_id": 285979891432422,
            "time_id": 37,
            "month": "November"
          },
          {
            "name": "Republic",
            "page_id": 617280148401132,
            "time_id": 37,
            "month": "November"
          }
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.cemex' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "page_name": "Cemex",
          "name": "Cemex",
          "page_id": 301079556757332,
          "time_id": 37
        }


        z = {
          "page_name": "Holcim",
          "name": "Holcim",
          "page_id": 285979891432422,
          "time_id": 37
        }
      }
      else if($state.current.name==='customer.jollibee_v2') {
        $scope.header = 'Jollibee Campaign Analysis'
        $scope.link_back = 'customer.jollibee_v2'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Jollibee",
            "page_id": 170055766373991,
            "time_id": 39,
            "month": "January",
            "value": "JollibeePhilippines"
          },
          {
            "name": "Mcdo",
            "page_id": 121863347862934,
            "time_id": 39,
            "month": "January",
            "value": "McDo.ph"
          },
          {
            "name": "KFC",
            "page_id": 117373194958135,
            "time_id": 39,
            "month": "January",
            "value": "kfcphilippines"
          },
          {
            "name": "Goldilocks",
            "page_id": 81789923849,
            "time_id": 39,
            "month": "January",
            "value": "GoldilocksPH"
          },
          {
            "name": "Red Ribbon",
            "page_id": 135469913163264,
            "time_id": 38,
            "month": "January",
            "value": "redribbonbakeshop"
          },
          {
            "name": "Kuya J",
            "page_id": 365678000259531,
            "time_id": 39,
            "month": "January",
            "value": "KujaJResto"
          },
          {
            "name": "Kenny Rogers",
            "page_id": 136339672775,
            "time_id": 39,
            "month": "January",
            "value": "KennyRogersPH"
          },
          {
            "name": "Pizza Hut",
            "page_id": 139195626174,
            "time_id": 39,
            "month": "January",
            "value": "pizzahutphilippines"
          },
          {
            "name": "Shakeys",
            "page_id": 148370235185103,
            "time_id": 39,
            "month": "January",
            "value": "ShakeysPH"
          },
          {
            "name": "Yellow Cab",
            "page_id": 226322167379462,
            "time_id": 39,
            "month": "January",
            "value": "YellowCabPizzaOfficial"
          },
          {
            "name": "Max Restaurant",
            "page_id": 42321613070,
            "time_id": 39,
            "month": "January",
            "value": "maxsrestaurant"
          },
          {
            "name": "Bonchon",
            "page_id": 116690228389144,
            "time_id": 39,
            "month": "January",
            "value": "BonchonPhilippines"
          },
          {
            "name": "GreenwichPizza",
            "page_id": 114259391924668,
            "time_id": 39,
            "month": "January",
            "value": "GreenwichPizza"
          },
          {
            "name": "Chowking",
            "page_id": 155127674511376,
            "time_id": 39,
            "month": "January",
            "value": "chowkingph"
          },
          {
            "name": "Burger King",
            "page_id": 107720949105,
            "time_id": 39,
            "month": "January",
            "value": "burgerkingph"
          },
          {
            "name": "Wendys",
            "page_id": 302389279839128,
            "time_id": 39,
            "month": "January",
            "value": "WendysPhilippines"
          }
        ]

        $scope.pages = [
          {
            "name": "Mcdo",
            "page_id": 121863347862934,
            "time_id": 39,
            "month": "January",
            "title": "Mcdo Campaigns",
          },
          {
            "name": "KFC",
            "page_id": 117373194958135,
            "time_id": 39,
            "month": "January",
            "title": "KFC Campaigns",
          },
          {
            "name": "Goldilocks",
            "page_id": 81789923849,
            "time_id": 39,
            "month": "January",
            "title": "Goldilocks Campaigns",
          },
          {
            "name": "Red Ribbon",
            "page_id": 135469913163264,
            "time_id": 39,
            "month": "January",
            "title": "Red Ribbon Campaigns",
          },
          {
            "name": "Kuya J",
            "page_id": 365678000259531,
            "time_id": 39,
            "month": "January",
            "title": "Kuya J Campaigns",
          },
          {
            "name": "Kenny Rogers",
            "page_id": 136339672775,
            "time_id": 39,
            "month": "January",
            "title": "Kenny Rodgers Campaigns",
          },
          {
            "name": "Pizza Hut",
            "page_id": 139195626174,
            "time_id": 39,
            "month": "January",
            "title": "Pizza Hut Campaigns",
          },
          {
            "name": "Shakeys",
            "page_id": 148370235185103,
            "time_id": 39,
            "month": "January",
            "title": "Shakeys Campaigns",
          },
          {
            "name": "Yellow Cab",
            "page_id": 226322167379462,
            "time_id": 39,
            "month": "January",
            "title": "Yellow Cab Campaigns",
          },
          {
            "name": "Max Restaurant",
            "page_id": 42321613070,
            "time_id": 39,
            "month": "January",
            "title": "Max Campaigns",
          },
          {
            "name": "Bonchon",
            "page_id": 116690228389144,
            "time_id": 39,
            "month": "January",
            "title": "Bonchon Campaigns",
          },
          {
            "name": "GreenwichPizza",
            "page_id": 114259391924668,
            "time_id": 39,
            "month": "January",
            "title": "Greenwich Campaigns"
          },
          {
            "name": "Chowking",
            "page_id": 155127674511376,
            "time_id": 39,
            "month": "January",
            "title": "Chowking Campaigns"
          },
          {
            "name": "Burger King",
            "page_id": 107720949105,
            "time_id": 39,
            "month": "January",
            "title": "Burger king Campaigns"
          },
          {
            "name": "Wendys",
            "page_id": 302389279839128,
            "time_id": 39,
            "month": "January",
            "title": "Wendys Campaigns"
          }
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.jollibee_v2' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "page_name": "Jollibee",
          "name": "Jollibee",
          "page_id": 170055766373991,
          "time_id": 39
        }


        z = {
          "page_name": "Mcdo",
          "name": "Mcdo",
          "page_id": 121863347862934,
          "time_id": 39
        }
      }

      else if($state.current.name==='customer.smart') {
        $scope.header = 'Smart Campaign Analysis'
        $scope.link_back = 'customer.smart'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Smart",
            "page_id": 137599377310,
            "time_id": 37,
            "month": "November"
          },
          {
            "name": "Globe",
            "page_id": 30433734747,
            "time_id": 37,
            "month": "November"
          },
        ]

        $scope.pages = [
          {
            "name": "Globe",
            "page_id": 30433734747,
            "time_id": 37,
            "month": "November",
            "title": "Globe Campaigns"
          }
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.smart' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "page_name": "SmartCommunications",
          "name": "Smart",
          "page_id": 137599377310,
          "time_id": 37,
          "title": "Smart Campaigns"
        }


        z = {
          "page_name": "Globe",
          "name": "Globe",
          "page_id": 30433734747,
          "time_id": 37,
          "title": "Globe Campaigns"
        }
      }
      else if($state.current.name==='customer.zed') {
        $scope.header = 'Zed Campaign Analysis'
        $scope.link_back = 'customer.zed'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "I love Zed",
            "page_id": 15289183412,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Hugot dropbox",
            "page_id": 1180224868695162,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Marcelo Santos",
            "page_id": 149288981775305,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Hugot Snap",
            "page_id": 339969129510172,
            "time_id": 38,
            "month": "December"
          },
        ]

        $scope.pages = [
          {
            "name": "Marcelo Santos",
            "page_id": 149288981775305,
            "time_id": 38,
            "month": "December",
            "title": "Marcelo Santos"
          },
          {
            "name": "Hugot dropbox",
            "page_id": 1180224868695162,
            "time_id": 38,
            "month": "December",
            "title": "Hugot dropbox Campaigns"
          },
          {
            "name": "Hugot Snap",
            "page_id": 339969129510172,
            "time_id": 38,
            "month": "December",
            "title": "Hugot Snap Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.zed' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "I love Zed",
          "page_id": 15289183412,
          "time_id": 38,
          "month": "December",
          "title": "I love Zed Campaigns"
        }


        z = {
          "name": "Marcelo Santos",
          "page_id": 149288981775305,
          "time_id": 38,
          "month": "December",
          "title": "Marcelo Santos Campaigns"
        }
      }

      else if($state.current.name==='customer.hanford') {
        $scope.header = 'Hanford Campaign Analysis'
        $scope.link_back = 'customer.hanford'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Hanford",
            "page_id": 133887831798,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Jockey",
            "page_id": 177253538986964,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Walker",
            "page_id": 1501759630043962 ,
            "time_id": 38,
            "month": "December"
          },
        ]

        $scope.pages = [
          {
            "name": "Jockey",
            "page_id": 177253538986964,
            "time_id": 38,
            "month": "December",
            "title": "Jockey Campaigns"
          },
          {
            "name": "Walker",
            "page_id": 1501759630043962 ,
            "time_id": 38,
            "month": "December",
            "title": "Walker Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.hanford' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Hanford",
          "page_id": 133887831798,
          "time_id": 38,
          "month": "December",
          "title": "Hanford Campaigns"
        }


        z = {
          "name": "Jockey",
          "page_id": 177253538986964,
          "time_id": 38,
          "month": "December",
          "title": "Jockey Campaigns"
        }
      }

      else if($state.current.name==='customer.unionbank') {
        $scope.header = 'Unionbank Campaign Analysis'
        $scope.link_back = 'customer.unionbank'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Unionbank",
            "page_id": 94992081403,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "BPI",
            "page_id": 363765923669586,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "BDO Unibank",
            "page_id": 1534645913418238 ,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Metrobank",
            "page_id": 1055736311112846 ,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "RCBC",
            "page_id": 163230773795493,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "East West Bank",
            "page_id": 186604978076496,
            "time_id": 38,
            "month": "December"
          },
        ]

        $scope.pages = [
          {
            "name": "BPI",
            "page_id": 363765923669586,
            "time_id": 38,
            "month": "December",
            "title": "BPI Campaigns"
          },
          {
            "name": "BDO Unibank",
            "page_id": 1534645913418238 ,
            "time_id": 38,
            "month": "December",
            "title": "BDO Campaigns"
          },
          {
            "name": "Metrobank",
            "page_id": 1055736311112846 ,
            "time_id": 38,
            "month": "December",
            "title": "Metrobank Campaigns"
          },
          {
            "name": "RCBC",
            "page_id": 163230773795493,
            "time_id": 38,
            "month": "December",
            "title": "RCBC Campaigns"
          },
          {
            "name": "East West Bank",
            "page_id": 186604978076496,
            "time_id": 38,
            "month": "December",
            "title": "East West Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.unionbank' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Unionbank",
          "page_id": 94992081403,
          "time_id": 38,
          "month": "December",
          "title": "Unionbank Campaigns"
        }


        z = {
          "name": "BPI",
          "page_id": 363765923669586,
          "time_id": 38,
          "month": "December",
          "title": "BPI Campaigns",
        }
      }

      else if($state.current.name==='customer.motolite') {
        $scope.header = 'Motolite Campaign Analysis'
        $scope.link_back = 'customer.motolite'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Motolite",
            "page_id": 115081940785,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Amaron Battery",
            "page_id": 116625928378669,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "3K Battery",
            "page_id": 1399857210280282,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Panasonic",
            "page_id": 564924910194990,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Michele Bumgarner",
            "page_id": 136366439724352,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Marlon Stockinger",
            "page_id": 394105152801,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Angelo Brewats",
            "page_id": 110299665735,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Tuason Racing",
            "page_id": 18379877735,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "James Deakin",
            "page_id": 582256978528918,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Autocar Philippines",
            "page_id": 684780578343018,
            "time_id": 40,
            "month": "February",
          }
        ]

        $scope.pages = [
          {
            "name": "Amaron Battery",
            "page_id": 116625928378669,
            "time_id": 40,
            "month": "February",
            "title": "Amaron Campaigns"
          },
          {
            "name": "3K Battery",
            "page_id": 1399857210280282,
            "time_id": 40,
            "month": "February",
            "title": "3k Campaigns"
          },
          {
            "name": "Panasonic",
            "page_id": 564924910194990,
            "time_id": 40,
            "month": "February",
            "title": "Panasonic Campaigns"
          },
          {
            "name": "James Deakin",
            "page_id": 582256978528918,
            "time_id": 40,
            "month": "February",
            "title": "James Deakin Campaigns"
          },
          {
            "name": "Marlon Stockinger",
            "page_id": 394105152801,
            "time_id": 40,
            "month": "February",
            "title": "Marlon Campaigns"
          }
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.motolite' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Motolite",
          "page_id": 115081940785,
          "time_id": 40,
          "month": "February",
          "title": "Motolite Campaigns"
        }


        z = {
          "name": "Amaron Battery",
          "page_id": 116625928378669,
          "time_id": 40,
          "month": "February",
          "title": "Amaron Campaigns"
        }
      }

      else if($state.current.name==='customer.spotify') {
        $scope.header = 'Spotify Campaign Analysis'
        $scope.link_back = 'customer.spotify'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Spotify",
            "page_id": 1460547350841573,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Deezer",
            "page_id": 1468869950021867,
            "time_id": 38,
            "month": "December"
          }
        ]

        $scope.pages = [
          {
            "name": "Deezer",
            "page_id": 1468869950021867,
            "time_id": 38,
            "month": "December",
            "title": "Deezer Campaigns"
          }
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.spotify' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Spotify",
          "page_id": 1460547350841573,
          "time_id": 38,
          "month": "December",
          "title": "Spotify Campaigns"
        }


        z = {
          "name": "Deezer",
          "page_id": 1468869950021867,
          "time_id": 38,
          "month": "December",
          "title": "Deezer Campaigns"
        }
      }

      else if($state.current.name==='customer.skinstation') {
        $scope.header = 'Skin Station Campaign Analysis'
        $scope.link_back = 'customer.skinstation'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Skin Station",
            "page_id": 132073186820278,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Dermstrata",
            "page_id": 147011622021467,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Flawless",
            "page_id": 112108142157631,
            "time_id": 38,
            "month": "December"
          },
        ]

        $scope.pages = [
          {
            "name": "Dermstrata",
            "page_id": 147011622021467,
            "time_id": 38,
            "month": "December",
            "title": "Dermstrata Campaigns"
          },
          {
            "name": "Flawless",
            "page_id": 112108142157631,
            "time_id": 38,
            "month": "December",
            "title": "Flawless Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.skinstation' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Skin Station",
          "page_id": 132073186820278,
          "time_id": 38,
          "month": "December",
          "title": "Skin Station Campaigns"
        }


        z = {
          "name": "Dermstrata",
          "page_id": 147011622021467,
          "time_id": 38,
          "month": "December",
          "title": "Dermstrata Campaigns"
        }
      }

      else if($state.current.name==='customer.sbc') {
        $scope.header = 'Seattles Best Analysis'
        $scope.link_back = 'customer.sbc'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Seattles",
            "page_id": 329013213099,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Bos Coffee",
            "page_id": 125804333461,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Starbucks",
            "page_id": 225073057924,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Coffee Bean",
            "page_id": 16063047093,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Ucc Cafe",
            "page_id": 564409143596966,
            "time_id": 39,
            "month": "January"
          },
        ]

        $scope.pages = [
          {
            "name": "Bos Coffee",
            "page_id": 125804333461,
            "time_id": 39,
            "month": "January",
            "title": "Bo's Campaigns"
          },
          {
            "name": "Starbucks",
            "page_id": 225073057924,
            "time_id": 39,
            "month": "January",
            "title": "Starbucks Campaigns"
          },
          {
            "name": "Coffee Bean",
            "page_id": 16063047093,
            "time_id": 39,
            "month": "January",
            "title": "Coffee Campaigns"
          },
          {
            "name": "Ucc Cafe",
            "page_id": 564409143596966,
            "time_id": 39,
            "month": "January",
            "title": "UCC Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.sbc' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Seattles",
          "page_id": 329013213099,
          "time_id": 39,
          "month": "January",
          "title": "Seattles Campaigns"
        }


        z = {
          "name": "Bos Coffee",
          "page_id": 125804333461,
          "time_id": 39,
          "month": "January",
          "title": "Bo's Campaigns"
        }
      }
      else if($state.current.name==='customer.bumgarner') {
        $scope.header = 'Michelle Best Analysis'
        $scope.link_back = 'customer.michelle'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Michele Bumgarner",
            "page_id": 136366439724352,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Marlon Stockinger",
            "page_id": 394105152801,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Angelo Brewats",
            "page_id": 110299665735,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Tuason Racing",
            "page_id": 18379877735,
            "time_id": 38,
            "month": "December"
          },
        ]

        $scope.pages = [
          {
            "name": "Marlon Stockinger",
            "page_id": 394105152801,
            "time_id": 38,
            "month": "December",
            "title": "Stockinger Campaigns"
          },
          {
            "name": "Angelo Brewats",
            "page_id": 110299665735,
            "time_id": 38,
            "month": "December",
            "title": "Angelo Campaigns"
          },
          {
            "name": "Tuason Racing",
            "page_id": 18379877735,
            "time_id": 38,
            "month": "December",
            "title": "Tuason Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.bumgarner' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Michele Bumgarner",
          "page_id": 136366439724352,
          "time_id": 38,
          "month": "December",
          "title": "Michele Campaigns"
        }


        z = {
          "name": "Marlon Stockinger",
          "page_id": 394105152801,
          "time_id": 38,
          "month": "December",
          "title": "Stockinger Campaigns",
        }
      }

      else if($state.current.name==='customer.games') {
        $scope.header = 'Games Campaign Analysis'
        $scope.link_back = 'customer.games'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Candy Crush Saga",
            "page_id": 244944385603396,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Piano Tiles Factory",
            "page_id": 559644867481914,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Color Switch",
            "page_id": 865084120251410,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Cut the Rope",
            "page_id": 159526264081185,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Angry Birds",
            "page_id": 314467614927,
            "time_id": 39,
            "month": "January"
          },
        ]

        $scope.pages = [
          {
            "name": "Color Switch",
            "page_id": 865084120251410,
            "time_id": 39,
            "month": "January",
            "title": "Color Switch Campaigns"
          },
          {
            "name": "Piano Tiles Factory",
            "page_id": 559644867481914,
            "time_id": 39,
            "month": "January",
            "title": "Piano Tiles Campaigns"
          },
          {
            "name": "Candy Crush Saga",
            "page_id": 244944385603396,
            "time_id": 39,
            "month": "January",
            "title": "Candy Crush Saga Campaigns"
          },
          {
            "name": "Cut the Rope",
            "page_id": 159526264081185,
            "time_id": 39,
            "month": "January",
            "title": "Cut the Rope Campaigns"
          },
          {
            "name": "Angry Birds",
            "page_id": 314467614927,
            "time_id": 39,
            "month": "January",
            "title": "Angry Birds Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.games' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Piano Tiles Factory",
          "page_id": 559644867481914,
          "time_id": 39,
          "month": "January",
          "title": "Piano Tiles Campaigns"
        }


        z = {
          "name": "Color Switch",
          "page_id": 865084120251410,
          "time_id": 39,
          "month": "January",
          "title": "Color Switch Campaigns"
        }
      }

      else if($state.current.name==='customer.skinwhite') {
        $scope.header = 'Skin White Analysis'
        $scope.link_back = 'customer.skinwhite'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Skin White",
            "page_id": 103024963081626 ,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Kojie San",
            "page_id": 230946443672413,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Gluta C",
            "page_id": 280025595411512,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "GlutaMAX",
            "page_id": 65297589413 ,
            "time_id": 38,
            "month": "December"
          },
        ]

        $scope.pages = [
          {
            "name": "GlutaMAX",
            "page_id": 65297589413 ,
            "time_id": 38,
            "month": "December",
            "title": "GlutaMAX Campaigns"
          },
          {
            "name": "Skin White",
            "page_id": 103024963081626 ,
            "time_id": 38,
            "month": "December",
            "title": "Skin White Campaigns"
          },
          {
            "name": "Kojie San",
            "page_id": 230946443672413,
            "time_id": 38,
            "month": "December",
            "title": "Kojie San Campaigns"
          },
          {
            "name": "Gluta C",
            "page_id": 280025595411512,
            "time_id": 38,
            "month": "December",
            "title": "Gluta C Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.skinwhite' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Skin White",
          "page_id": 103024963081626 ,
          "time_id": 38,
          "month": "December",
          "title": "Skin White Campaigns"
        }


        z = {
          "name": "GlutaMAX",
          "page_id": 65297589413 ,
          "time_id": 38,
          "month": "December",
          "title": "GlutaMAX Campaigns"
        }
      }

      else if($state.current.name==='customer.mercury') {
        $scope.header = 'Mercury Drug Analysis'
        $scope.link_back = 'customer.mercury'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Mercury Drug",
            "page_id": 153615111448758,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "South Star",
            "page_id": 251929764847,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Rose Pharmacy",
            "page_id": 424789887567451,
            "time_id": 39,
            "month": "January"
          },
          {
            "name": "Watsons",
            "page_id": 150621454975420 ,
            "time_id": 39,
            "month": "January"
          },
        ]

        $scope.pages = [
          {
            "name": "South Star",
            "page_id": 251929764847,
            "time_id": 39,
            "month": "January",
            "title": "South Star Campaigns"
          },
          {
            "name": "Rose Pharmacy",
            "page_id": 424789887567451,
            "time_id": 39,
            "month": "January",
            "title": "Rose Pharmacy Campaigns"
          },
          {
            "name": "Watsons",
            "page_id": 150621454975420 ,
            "time_id": 39,
            "month": "January",
            "title": "Watsons Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.mercury' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Mercury Drug",
          "page_id": 153615111448758,
          "time_id": 39,
          "month": "January",
          "title": "Mercury Drug Campaigns"
        }


        z = {
          "name": "Watsons",
          "page_id": 150621454975420 ,
          "time_id": 39,
          "month": "January",
          "title": "Watsons Campaigns"
        }
      }

      else if($state.current.name==='customer.viu') {
        $scope.header = 'Viu Analysis'
        $scope.link_back = 'customer.viu'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Viu",
            "page_id": 867166626666015,
            "time_id": 39,
            "month": "January",
          },
          {
            "name": "HOOQ",
            "page_id": 897716513613329,
            "time_id": 39,
            "month": "January",
          },
          {
            "name": "Netflix",
            "page_id": 304747616543178,
            "time_id": 39,
            "month": "January",
          },
        ]

        $scope.pages = [
          {
            "name": "HOOQ",
            "page_id": 897716513613329,
            "time_id": 39,
            "month": "January",
            "title": "HOOQ Campaigns"
          },
          {
            "name": "Netflix",
            "page_id": 304747616543178,
            "time_id": 39,
            "month": "January",
            "title": "Netflix Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.viu' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Viu",
          "page_id": 867166626666015,
          "time_id": 39,
          "month": "January",
          "title": "Viu Campaigns"
        }


        z = {
          "name": "HOOQ",
          "page_id": 897716513613329,
          "time_id": 39,
          "month": "January",
          "title": "HOOQ Campaigns"
        }
      }

      else if($state.current.name==='customer.fuse') {
        $scope.header = 'Fuse Analysis'
        $scope.link_back = 'customer.fuse'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Fuse Lending",
            "page_id": 157900837924260,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Villarica",
            "page_id": 155765647803482,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Cebuana Lhuiller",
            "page_id": 116956164988102,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Quickpera",
            "page_id": 1001739689952516,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Pera Agad",
            "page_id": 1575732742725083,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Esquire Philippines",
            "page_id": 151332998287346,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Doctor Cash",
            "page_id": 979893188736339,
            "time_id": 38,
            "month": "December"
          }
        ]

        $scope.pages = [
          {
            "name": "Villarica",
            "page_id": 155765647803482,
            "time_id": 38,
            "month": "December",
            "title": "Villarica Campaigns"
          },
          {
            "name": "Cebuana Lhuiller",
            "page_id": 116956164988102,
            "time_id": 38,
            "month": "December",
            "title": "Cebuana Campaigns"
          },
          {
            "name": "Quickpera",
            "page_id": 1001739689952516,
            "time_id": 38,
            "month": "December",
            "title": "Quickpera Campaigns"
          },
          {
            "name": "Pera Agad",
            "page_id": 1575732742725083,
            "time_id": 38,
            "month": "December",
            "title": "Pera Agad Campaigns"
          },
          {
            "name": "Esquire Philippines",
            "page_id": 151332998287346,
            "time_id": 38,
            "month": "December",
            "title": "Esquire Campaigns"
          },
          {
            "name": "Doctor Cash",
            "page_id": 979893188736339,
            "time_id": 38,
            "month": "December",
            "title": "Doctor Cash Campaigns"
          }
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.fuse' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Fuse Lending",
          "page_id": 157900837924260,
          "time_id": 38,
          "month": "December",
          "title": "Fuse Campaigns"
        }


        z = {
          "name": "Villarica",
          "page_id": 155765647803482,
          "time_id": 38,
          "month": "December",
          "title": "Villarica Campaigns"
        }
      }

      else if($state.current.name==='customer.truemoney') {
        $scope.header = 'True Money Analysis'
        $scope.link_back = 'customer.truemoney'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "True Money",
            "page_id": 1004674812949696,
            "time_id": 38,
            "month": "December",
          },
          {
            "name": "V Money",
            "page_id": 227334417402554,
            "time_id": 38,
            "month": "December",
          },
          {
            "name": "Coins",
            "page_id": 441361009326994,
            "time_id": 38,
            "month": "December",
          },
          {
            "name": "Paymaya",
            "page_id": 115016608835194,
            "time_id": 38,
            "month": "December",
          },
        ]

        $scope.pages = [
          {
            "name": "V Money",
            "page_id": 227334417402554,
            "time_id": 38,
            "month": "December",
            "title": "V Money Campaigns"
          },
          {
            "name": "True Money",
            "page_id": 1004674812949696,
            "time_id": 38,
            "month": "December",
            "title": "True Money Campaigns"
          },
          {
            "name": "Coins",
            "page_id": 441361009326994,
            "time_id": 38,
            "month": "December",
            "title": "Coins Campaigns"
          },
          {
            "name": "Paymaya",
            "page_id": 115016608835194,
            "time_id": 38,
            "month": "December",
            "title": "Paymaya Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.truemoney' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "True Money",
          "page_id": 1004674812949696,
          "time_id": 38,
          "month": "December",
          "title": "True Money Campaigns"
        }


        z = {
          "name": "V Money",
          "page_id": 227334417402554,
          "time_id": 38,
          "month": "December",
          "title": "V Money Campaigns"
        }
      }

      else if($state.current.name==='customer.angara') {
        $scope.header = 'Angara Analysis'
        $scope.link_back = 'customer.angara'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "Angara",
            "page_id": 156752721080952,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Bam Aquino",
            "page_id": 148362681967446,
            "time_id": 40,
            "month": "February",
          },
          {
            "name": "Mocha",
            "page_id": 319779186521,
            "time_id": 40,
            "month": "February",
          }
        ]

        $scope.pages = [
          {
            "name": "Mocha",
            "page_id": 319779186521,
            "time_id": 40,
            "month": "February",
            "title": "Mocha Unson Campaigns"
          },
          {
            "name": "Bam Aquino",
            "page_id": 148362681967446,
            "time_id": 40,
            "month": "February",
            "title": "Bam Aquino Campaigns"
          },
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.angara' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "Angara",
          "page_id": 156752721080952,
          "time_id": 40,
          "month": "February",
          "title": "Angara Campaigns"
        }


        z = {
          "name": "Mocha",
          "page_id": 319779186521,
          "time_id": 40,
          "month": "February",
          "title": "Mocha Unson Campaigns"
        }
      }

      else if($state.current.name==='customer.sm') {
        $scope.header = 'SM Analysis'
        $scope.link_back = 'customer.sm'

        $scope.cc = {}
        $scope.ac = {}

        $scope.pages_comparative = [
          {
            "name": "SM Advantage",
            "page_id": 97882167903,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "Robinsons",
            "page_id": 652458998117884,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Store",
            "page_id": 184100765047970,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Accessories",
            "page_id": 291083781726,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Kid Fashion",
            "page_id": 146425958709620,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Woman",
            "page_id": 244582915745300,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Shoes and Bags",
            "page_id": 137417929612735,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Mens LifeStyle",
            "page_id": 112370935491226,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Fashion Forum",
            "page_id": 155680806185,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Megamall",
            "page_id": 133863234554,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM North Edsa",
            "page_id": 198076995260,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Seaside Cebu",
            "page_id": 302881109725635,
            "time_id": 38,
            "month": "December"
          },
          {
            "name": "SM Mall of Asia",
            "page_id": 126585560768227,
            "time_id": 38,
            "month": "December"
          }
        ]

        $scope.pages = [
          {
            "name": "Robinsons",
            "page_id": 652458998117884,
            "time_id": 38,
            "month": "December",
            "title": "Robinsons Campaigns"
          },
          {
            "name": "SM Store",
            "page_id": 184100765047970,
            "time_id": 38,
            "month": "December",
            "title": "Sm Store Campaigns"
          },
          {
            "name": "SM Accessories",
            "page_id": 291083781726,
            "time_id": 38,
            "month": "December",
            "title": "Sm Accessories Campaigns"
          },
          {
            "name": "SM Kid Fashion",
            "page_id": 146425958709620,
            "time_id": 38,
            "month": "December",
            "title": "Sm Kid Fashion Campaigns"
          },
          {
            "name": "SM Woman",
            "page_id": 244582915745300,
            "time_id": 38,
            "month": "December",
            "title": "Sm Woman Campaigns"
          },
          {
            "name": "SM Shoes and Bags",
            "page_id": 137417929612735,
            "time_id": 38,
            "month": "December",
            "title": "Sm Shoes and Bags Campaigns"
          },
          {
            "name": "SM Mens LifeStyle",
            "page_id": 112370935491226,
            "time_id": 38,
            "month": "December",
            "title": "Sm Mens LifeStyle Campaigns"
          },
          {
            "name": "SM Fashion Forum",
            "page_id": 155680806185,
            "time_id": 38,
            "month": "December",
            "title": "Sm Fashion Campaigns"
          },
          {
            "name": "SM Megamall",
            "page_id": 133863234554,
            "time_id": 38,
            "month": "December",
            "title": "Sm Megamall Campaigns"
          },
          {
            "name": "SM North Edsa",
            "page_id": 198076995260,
            "time_id": 38,
            "month": "December",
            "title": "Sm North Edsa Campaigns"
          },
          {
            "name": "SM Seaside Cebu",
            "page_id": 302881109725635,
            "time_id": 38,
            "month": "December",
            "title": "Sm Seaside Cebu Campaigns"
          },
          {
            "name": "SM Mall of Asia",
            "page_id": 126585560768227,
            "time_id": 38,
            "month": "December",
            "title": "Sm Mall of Asia Campaigns"
          }
        ]
        $scope.page = $scope.pages[0]

        $scope.navbarOptions = [{"label": 'Competitor Analytics', 'link':'customer.sm' },
                                {"label": 'Comparative Analytics', 'link':'customer.comparative'},
                                {"label": 'Loyalty Analytics', 'link':'customer.loyalty'}]

        loyalty = 'multiBarHorizontalChart'

        p = {
          "name": "SM Advantage",
          "page_id": 97882167903,
          "time_id": 38,
          "month": "December",
          "title": "Sm Advantage Campaigns"
        }


        z = {
          "name": "Robinsons",
          "page_id": 652458998117884,
          "time_id": 38,
          "month": "December",
          "title": "Robinsons Campaigns"
        }
      }



        type = 'lineChart'

        $scope.filters = [
          {
            "name": "Choose Filter",
            "value": 0
          },
          {
            "name": "Date",
            "value": "time"
          },
          {
            "name": "Shares",
            "value": "shares"
          },
          {
            "name": "Engagement",
            "value": "total"
          },
          {
            "name": "Returning Users",
            "value": "Returning Users"
          },
          {
            "name": "New Users",
            "value": "New Users"
          },
          {
            "name": "Like",
            "value": "LIKE"
          },
          {
            "name": "Comments",
            "value": "comments"
          },
          {
            "name": "Love",
            "value": "LOVE"
          },
          {
            "name": "Sad",
            "value": "SAD"
          },
          {
            "name": "Wow",
            "value": "WOW"
          },
          {
            "name": "Haha",
            "value": "HAHA"
          },
          {
            "name": "Positive",
            "value": "positive"
          },
          {
            "name": "Negative",
            "value": "negative"
          },
          {
            "name": "Overall Sentiment",
            "value": "overall_sentiment"
          },
        ]

        filters = $scope.filters
        $scope.filters = filters.concat($scope.pages_comparative)



        $scope.options_chicken = GraphService.chart_jollibee(type)
        $scope.rc = {}

        reverseit = function(arr) {
          _.each(arr, function(a){
            a.values.reverse();
          });

          return arr
        }

        $scope.competitor_analysis = function(page) {

          $scope.page = page

          period_data = {
            "page_id": page.page_id,
            "time_id": $scope.period.time_id
          }

          console.log(period_data)

          competitor(period_data)
        }

        $scope.competitor_period = function(period) {


          $scope.period = period
          console.log(period)

          period_data = {
            "page_id": $scope.page.page_id,
            "time_id": $scope.period.time_id
          }

          anchor_data = {
            "page_id": p.page_id,
            "time_id": $scope.period.time_id
          }

          anchor_customer(anchor_data)
          competitor(period_data)

        }

          DataService.cloudfone(p)
          .then(function(d){
            console.log(d)
            $scope.base_data = d
            d.values= reverseit(d.values)
            d.posts = d.posts.reverse()

            _.each(d.values, function(a) {
              a.values = a.values.reverse()
            })

            $scope.data_chicken_jollibee = d.values


            _.each(d.posts, function(a){
              a.time = a.time/1000
              a.time_formatted = moment.unix(a.time).format("MM/DD");
            });

            d.posts = _.uniq(d.posts, function(p){ return p.id; });
            $scope.posts = d


            $scope.options_comparative_jollibee =  GraphService.chart_line(type)
            $scope.data_comparative_jollibee = d.compare

            $scope.options_loyalty =  GraphService.chart_loyalty()

            $scope.data_retention = d.retention
            $scope.data_breakdown = d.breakdown
            add_data_entry_anchor()


            _.each(d.loyalty, function(a) {
              if(a.key =="New") {
                a.color = '#fd7f28'
              }
              else {
                a["color"] ='#fdba7d'
              }
            })

            $scope.data_loyalty = d.loyalty

            $scope.loading.comparative_line = false


            _.each(d.timeline, function(a){
              a.month_formatted = moment(a.mid_text).format('MMMM')
            });


            if (typeof d.timeline !== 'undefined' && d.timeline.length > 0) {
              $scope.periods = _.sortBy(d.timeline, 'start_date').reverse();
              $scope.period = $scope.periods[0]
            }
            else {
              $scope.period = {
                  "time_id": 35,
                  "month": 'October'
                }
            }


          });


          anchor_customer = function(p) {

            DataService.cloudfone(p)
            .then(function(d){
              console.log(d.values)
              $scope.base_data = d
              d.values= reverseit(d.values)
              d.posts = d.posts.reverse()

              _.each(d.values, function(a) {
                a.values = a.values.reverse()
              })

              $scope.data_chicken_jollibee = d.values


              _.each(d.posts, function(a){
                a.time = a.time/1000
                a.time_formatted = moment.unix(a.time).format("MM/DD");
              });
              $scope.posts = d

              _.each(d.timeline, function(a){
                a.month_formatted = moment(a.mid_text).format('MMMM')
              });

              $scope.data_comparative_jollibee = d.compare
              $scope.data_breakdown = d.breakdown
              add_data_entry_anchor()


              $scope.ac.api.refresh()

            });
          }

          competitor = function(p) {
            $scope.loading = true
            DataService.cloudfone(p)
            .then(function(d){
              $scope.base_data = d
              d.values= reverseit(d.values)
              d.posts = d.posts.reverse()

              _.each(d.values, function(a) {
                a.values = a.values.reverse()
              })

              $scope.data_chicken_mcdo = d.values


              _.each(d.posts, function(a){
                a.time = a.time/1000
                a.time_formatted = moment.unix(a.time).format("MM/DD");
              });
              $scope.posts_mcdo = d

              add_data_entry_competitor()

              $scope.loading = false

              $scope.cc.api.refresh()

            });

          }

          competitor(z)

          $scope.analyze = function (post) {
            $scope.current_post = post
            var analyisInstance =  $uibModal.open({
                animation: true,
                templateUrl: 'customers/post.html',
                controller: 'PostController',
                scope: $scope,
                windowClass: 'app-modal-window'
            });
          }



          $scope.tab = $state.current.name;
          params = {
            "token": "EAAWRP9HfgLcBABLTZBmwMJLGZChWd4LZCuWH7aQ85DMfVRWDb88oyQb1C84l4ZCE8F3R6MkIdJQEMAat4UvJCb2ZBjcFCTZAZA2nZCf9eX8XbKRpxvxpATsonKAaRKpubV5ltuJSXRxQZCpPZCOKhHWMK32gapM69PRnwZD",
            "start_date": 1469574000,
            "end_date": 1479919600,
            "page_name": "motoliteexpresshatid",
            "user_id": 1,
            "interest_name": ['ToyotaMotorPhilippines', 'kiainthephilippines'],
            "variable1": "gender",
            "variable2": "address",
            "days": 14,
          }

          $scope.submit_anchor = function(anchor) {
            anchor_customer(anchor)
          }
          $scope.submit_competitor = function(c) {
            competitor(c)
          }

          $scope.posts_show = true;
          $scope.report_show = false;

          sortByEngagements = function () {
            $scope.posts.posts =  _.sortBy($scope.posts.posts, function(o) { return o.total; })
            $scope.posts_mcdo.posts =  _.sortBy($scope.posts_mcdo.posts, function(o) { return o.total; })
            $scope.posts.posts = $scope.posts.posts.reverse()
            $scope.posts_mcdo.posts = $scope.posts_mcdo.posts.reverse()
          }
          $scope.sortByEngagements = function() {
            sortByEngagements()
            $scope.posts_show = true;
            $scope.report_show = false;
          }

          $scope.sortBySentiment = function(senti) {

            if(senti!=0) {
              console.log(senti)
              $scope.posts.posts =  _.sortBy($scope.posts.posts, function(o) { return o[senti]; })
              $scope.posts.posts = $scope.posts.posts.reverse()
              $scope.posts_mcdo.posts =  _.sortBy($scope.posts_mcdo.posts, function(o) { return o[senti]; })
              $scope.posts_mcdo.posts = $scope.posts_mcdo.posts.reverse()
            }

            $scope.posts_show = true;
            $scope.report_show = false;
          }

          $scope.top5 = function() {
            sortByEngagements()
            $scope.posts_show = false;
            $scope.report_show = true;

          }





  }]);
