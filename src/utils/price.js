export default function(type, level, time, days, period, ts) {
  if (!type || !level || !time || !days || !period || ts == -1)
    return { value: 0, dcn: 0, dcp: 0 };
  let price = {
    phone: {
      prime: {
        10: {
          2: {
            1: {
              value: 64000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 173000,
              dcn: 19000,
              dcp: 10
            },
            6: {
              value: 326000,
              dcn: 58000,
              dcp: 15
            },
            12: {
              value: 614000,
              dcn: 154000,
              dcp: 20
            }
          },
          3: {
            1: {
              value: 86000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 232000,
              dcn: 26000,
              dcp: 10
            },
            6: {
              value: 439000,
              dcn: 77000,
              dcp: 15
            },
            12: {
              value: 826000,
              dcn: 206000,
              dcp: 20
            }
          },
          5: {
            1: {
              value: 109000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 262000,
              dcn: 32000,
              dcp: 10
            },
            6: {
              value: 556000,
              dcn: 97000,
              dcp: 15
            },
            12: {
              value: 1046000,
              dcn: 262000,
              dcp: 20
            }
          }
        },
        20: {
          2: {
            1: {
              value: 128000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 346000,
              dcn: 38000,
              dcp: 10
            },
            6: {
              value: 652000,
              dcn: 116000,
              dcp: 15
            },
            12: {
              value: 1228000,
              dcn: 308000,
              dcp: 20
            }
          },
          3: {
            1: {
              value: 172000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 464000,
              dcn: 52000,
              dcp: 10
            },
            6: {
              value: 878000,
              dcn: 154000,
              dcp: 15
            },
            12: {
              value: 1652000,
              dcn: 412000,
              dcp: 20
            }
          },
          5: {
            1: {
              value: 218000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 588000,
              dcn: 66000,
              dcp: 10
            },
            6: {
              value: 1112000,
              dcn: 196000,
              dcp: 15
            },
            12: {
              value: 2092000,
              dcn: 524000,
              dcp: 20
            }
          }
        },
        30: {
          2: {
            1: {
              value: 192000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 519000,
              dcn: 57000,
              dcp: 10
            },
            6: {
              value: 978000,
              dcn: 174000,
              dcp: 15
            },
            12: {
              value: 1842000,
              dcn: 462000,
              dcp: 20
            }
          },
          3: {
            1: {
              value: 258000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 696000,
              dcn: 78000,
              dcp: 10
            },
            6: {
              value: 1317000,
              dcn: 231000,
              dcp: 15
            },
            12: {
              value: 2478000,
              dcn: 618000,
              dcp: 20
            }
          },
          5: {
            1: {
              value: 327000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 882000,
              dcn: 99000,
              dcp: 10
            },
            6: {
              value: 1668000,
              dcn: 294000,
              dcp: 15
            },
            12: {
              value: 3138000,
              dcn: 786000,
              dcp: 20
            }
          }
        }
      },
      economy: {
        10: {
          2: {
            1: {
              value: 58000,
              dcn: 6000,
              dcp: 10
            },
            3: {
              value: 154000,
              dcn: 38000,
              dcp: 20
            },
            6: {
              value: 288000,
              dcn: 96000,
              dcp: 25
            },
            12: {
              value: 538000,
              dcn: 230000,
              dcp: 30
            }
          },
          3: {
            1: {
              value: 77000,
              dcn: 9000,
              dcp: 11
            },
            3: {
              value: 206000,
              dcn: 52000,
              dcp: 21
            },
            6: {
              value: 387000,
              dcn: 129000,
              dcp: 25
            },
            12: {
              value: 722000,
              dcn: 310000,
              dcp: 31
            }
          },
          5: {
            1: {
              value: 98000,
              dcn: 11000,
              dcp: 11
            },
            3: {
              value: 262000,
              dcn: 65000,
              dcp: 20
            },
            6: {
              value: 491000,
              dcn: 163000,
              dcp: 25
            },
            12: {
              value: 916000,
              dcn: 392000,
              dcp: 30
            }
          }
        },
        20: {
          2: {
            1: {
              value: 104000,
              dcn: 24000,
              dcp: 19
            },
            3: {
              value: 277000,
              dcn: 107000,
              dcp: 28
            },
            6: {
              value: 518000,
              dcn: 250000,
              dcp: 33
            },
            12: {
              value: 968000,
              dcn: 568000,
              dcp: 37
            }
          },
          3: {
            1: {
              value: 139000,
              dcn: 33000,
              dcp: 20
            },
            3: {
              value: 371000,
              dcn: 145000,
              dcp: 29
            },
            6: {
              value: 697000,
              dcn: 335000,
              dcp: 33
            },
            12: {
              value: 1300000,
              dcn: 764000,
              dcp: 38
            }
          },
          5: {
            1: {
              value: 176000,
              dcn: 42000,
              dcp: 20
            },
            3: {
              value: 472000,
              dcn: 182000,
              dcp: 28
            },
            6: {
              value: 884000,
              dcn: 424000,
              dcp: 33
            },
            12: {
              value: 1649000,
              dcn: 967000,
              dcp: 37
            }
          }
        },
        30: {
          2: {
            1: {
              value: 148000,
              dcn: 44000,
              dcp: 23
            },
            3: {
              value: 393000,
              dcn: 183000,
              dcp: 32
            },
            6: {
              value: 734000,
              dcn: 418000,
              dcp: 37
            },
            12: {
              value: 1372000,
              dcn: 932000,
              dcp: 41
            }
          },
          3: {
            1: {
              value: 196000,
              dcn: 62000,
              dcp: 25
            },
            3: {
              value: 525000,
              dcn: 0.249,
              dcp: 33
            },
            6: {
              value: 987000,
              dcn: 561000,
              dcp: 37
            },
            12: {
              value: 1841000,
              dcn: 1255000,
              dcp: 41
            }
          },
          5: {
            1: {
              value: 250000,
              dcn: 77000,
              dcp: 24
            },
            3: {
              value: 668000,
              dcn: 313000,
              dcp: 32
            },
            6: {
              value: 1252000,
              dcn: 710000,
              dcp: 37
            },
            12: {
              value: 2336000,
              dcn: 1588000,
              dcp: 41
            }
          }
        }
      }
    },
    video: {
      prime: {
        20: {
          2: {
            1: {
              value: 102000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 275000,
              dcn: 31000,
              dcp: 10
            },
            6: {
              value: 520000,
              dcn: 92000,
              dcp: 15
            },
            12: {
              value: 979000,
              dcn: 245000,
              dcp: 20
            }
          },
          3: {
            1: {
              value: 138000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 373000,
              dcn: 41000,
              dcp: 10
            },
            6: {
              value: 704000,
              dcn: 124000,
              dcp: 15
            },
            12: {
              value: 1325000,
              dcn: 331000,
              dcp: 20
            }
          },
          5: {
            1: {
              value: 174000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 470000,
              dcn: 52000,
              dcp: 10
            },
            6: {
              value: 887000,
              dcn: 157000,
              dcp: 15
            },
            12: {
              value: 1670000,
              dcn: 418000,
              dcp: 20
            }
          }
        },
        40: {
          2: {
            1: {
              value: 204000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 550000,
              dcn: 62000,
              dcp: 10
            },
            6: {
              value: 1040000,
              dcn: 184000,
              dcp: 15
            },
            12: {
              value: 1958000,
              dcn: 490000,
              dcp: 20
            }
          },
          3: {
            1: {
              value: 276000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 746000,
              dcn: 82000,
              dcp: 10
            },
            6: {
              value: 1408000,
              dcn: 248000,
              dcp: 15
            },
            12: {
              value: 2650000,
              dcn: 662000,
              dcp: 20
            }
          },
          5: {
            1: {
              value: 348000,
              dcn: 0,
              dcp: 0
            },
            3: {
              value: 940000,
              dcn: 104000,
              dcp: 10
            },
            6: {
              value: 1774000,
              dcn: 314000,
              dcp: 15
            },
            12: {
              value: 3340000,
              dcn: 836000,
              dcp: 20
            }
          }
        }
      },
      economy: {
        20: {
          2: {
            1: {
              value: 92000,
              dcn: 10000,
              dcp: 10
            },
            3: {
              value: 245000,
              dcn: 61000,
              dcp: 20
            },
            6: {
              value: 459000,
              dcn: 153000,
              dcp: 25
            },
            12: {
              value: 857000,
              dcn: 367000,
              dcp: 30
            }
          },
          3: {
            1: {
              value: 124000,
              dcn: 14000,
              dcp: 10
            },
            3: {
              value: 331000,
              dcn: 83000,
              dcp: 20
            },
            6: {
              value: 621000,
              dcn: 207000,
              dcp: 25
            },
            12: {
              value: 1159000,
              dcn: 497000,
              dcp: 30
            }
          },
          5: {
            1: {
              value: 157000,
              dcn: 17000,
              dcp: 10
            },
            3: {
              value: 418000,
              dcn: 104000,
              dcp: 20
            },
            6: {
              value: 783000,
              dcn: 261000,
              dcp: 25
            },
            12: {
              value: 1462000,
              dcn: 626000,
              dcp: 30
            }
          }
        },
        40: {
          2: {
            1: {
              value: 166000,
              dcn: 38000,
              dcp: 19
            },
            3: {
              value: 441000,
              dcn: 171000,
              dcp: 28
            },
            6: {
              value: 826000,
              dcn: 398000,
              dcp: 33
            },
            12: {
              value: 1543000,
              dcn: 905000,
              dcp: 37
            }
          },
          3: {
            1: {
              value: 223000,
              dcn: 53000,
              dcp: 19
            },
            3: {
              value: 596000,
              dcn: 232000,
              dcp: 28
            },
            6: {
              value: 1118000,
              dcn: 538000,
              dcp: 32
            },
            12: {
              value: 2086000,
              dcn: 1226000,
              dcp: 37
            }
          },
          5: {
            1: {
              value: 283000,
              dcn: 65000,
              dcp: 19
            },
            3: {
              value: 752000,
              dcn: 292000,
              dcp: 28
            },
            6: {
              value: 1409000,
              dcn: 679000,
              dcp: 33
            },
            12: {
              value: 2632000,
              dcn: 1544000,
              dcp: 37
            }
          }
        }
      }
    }
  };

  return price[type][level][time][days][period];
}
