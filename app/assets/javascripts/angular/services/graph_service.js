angular.module('Honeypot.services')
  .service('GraphService',['$http', '$q', function($http, $q) {
    this.chart = function(type) {
        return {
          chart: {
              type: type,
              height: 450,
              margin : {
                  top: 20,
                  right: 20,
                  bottom: 30,
                  left: 40
              },
              x: function(d){return d[0];},
              y: function(d){return d[1];},
              useVoronoi: false,
              clipEdge: true,
              duration: 100,
              useInteractiveGuideline: true,
              xAxis: {
                  showMaxMin: false,
                  tickFormat: function(d) {
                      return d3.time.format('%x')(new Date(d))
                  }
              },
              yAxis: {
                  tickFormat: function(d){
                      return d3.format(',.2f')(d);
                  }
              },
              zoom: {
                  enabled: true,
                  scaleExtent: [1, 10],
                  useFixedDomain: false,
                  useNiceScale: false,
                  horizontalOff: false,
                  verticalOff: true,
                  unzoomEventType: 'dblclick.zoom'
              }
          }
        }
    };

    this.chart_jollibee = function(type) {
        return {
          chart: {
              type: 'lineChart',
              height: 450,
              margin : {
                  top: 20,
                  right: 20,
                  bottom: 30,
                  left: 50
              },
              x: function(d){return d[0];},
              y: function(d){return d[1];},
              useVoronoi: false,
              clipEdge: true,
              duration: 100,
              useInteractiveGuideline: true,
              xAxis: {
                  showMaxMin: false,
                  tickFormat: function(d) {
                      return d3.time.format('%x')(new Date(d))
                  }
              },
              yAxis: {
                  tickFormat: function(d){
                    return d3.format('s')(d)
                  }
              },
              zoom: {
                  enabled: true,
                  scaleExtent: [1, 10],
                  useFixedDomain: false,
                  useNiceScale: false,
                  horizontalOff: false,
                  verticalOff: true,
                  unzoomEventType: 'dblclick.zoom'
              }
          }
        }
    };

    this.discreteBarChart = function(type) {
      return {
        chart: {
            type: 'discreteBarChart',
            height: 350,
            margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.0f')(d);
            },
            duration: 500,
            xAxis: {
                axisLabel: 'Engagement Metric'
            },
            yAxis: {
                tickFormat: function(d){
                  return d3.format('s')(d)
                },
                axisLabel: 'Value',

            }
        }
      }
    }

    this.likesArea = function(type) {
        return {
          chart: {
              type: type,
              height: 450,
              margin : {
                  top: 20,
                  right: 20,
                  bottom: 30,
                  left: 40
              },
              x: function(d){return d[0];},
              y: function(d){return d[1];},
              useVoronoi: false,
              clipEdge: true,
              duration: 100,
              useInteractiveGuideline: true,
              xAxis: {
                  showMaxMin: false,
                  tickFormat: function(d) {
                      return d3.time.format('%x')(new Date(d))
                  }
              },
              yAxis: {
                  tickFormat: function(d){
                      return d3.format(',.2f')(d);
                  }
              },
              color: ['#db7933'],
              zoom: {
                  enabled: true,
                  scaleExtent: [1, 10],
                  useFixedDomain: false,
                  useNiceScale: false,
                  horizontalOff: false,
                  verticalOff: true,
                  unzoomEventType: 'dblclick.zoom'
              }
          }
        }
    };

    this.chart_line = function(type) {
        return {
          chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 150,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value + (1e-10);},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.2f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Company Brands',
                    rotateLabels: -45
                },
                yAxis: {
                    axisLabel: 'Engaged Users',
                    axisLabelDistance: -10
                }
            }
        }
    }

    this.chart_loyalty = function(type) {
        return {
          chart: {
                type: 'multiBarChart',
                height: 450,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function(d){
                        return d3.format('s')(d)
                    }
                }
            }
        }
    }

    this.chart_retention = function(type) {
        return {
          chart: {
                type: 'multiBarChart',
                height: 450,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function(d){
                        return d3.format('.1%')(d/100)
                    }
                }
            }
        }
    }




  }]);
