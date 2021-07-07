import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import Layout from "../components/Layout";
import {Header, Icon, Avatar, Badge, Divider} from "react-native-elements";
import {height, width} from "../helpers/screens"
import {defaultBackground, gray, grayBackground, icon, primary1} from "../helpers/colors";

export default function HomeScreen () {
    return (
        <Layout>
            <Header
                containerStyle={{
                backgroundColor: 'white',
                    height: '10%',
                    paddingHorizontal: '4.5%',
                    borderBottomColor: 'white'
            }}
            >
                <View
                    style={{
                    width: width * 0.66,
                }}>
                    <Text style={{
                        color: icon,
                        fontSize: 13
                    }}>
                        Welcome back,
                    </Text>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 16
                    }}>
                        Barly Vallendito
                    </Text>
                </View>
                <View
                    style={{
                        width: width * 0.3,
                        alignSelf: 'flex-end',
                        left: '11%',
                        height: '85%',
                        justifyContent: 'flex-end'
                    }}

                >
                    <Icon style={{
                       alignSelf: 'flex-end'
                    }} name="notifications" color={gray} />
                    <Badge
                        status="error"
                        containerStyle={{
                            position: 'absolute',
                            top: height * 0.008,
                            right: height * 0.007,
                            borderColor: 'white',
                        }}
                    />
                </View>
                <View
                    style={{
                        width: width * 0.1,
                    }}
                >
                    <Avatar
                        source={{
                            uri:
                                'https://landscapewpstorage01.blob.core.windows.net/www-landscapeinstitute-org/2020/09/VRheadset-unsplash-cropped.png',
                        }}
                        avatarStyle={{
                            borderRadius: 6,
                        }}
                        containerStyle={{
                            alignSelf: "flex-end"
                        }}
                    />
                </View>
            </Header>

            <ScrollView
                horizontal
                decelerationRate="fast"
                style={{
                    marginTop: height * 0.01,
                    marginBottom: height * 0.02
                }}
                contentContainerStyle={{
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: primary1,
                        height: height * 0.26,
                        width: width * 0.8,
                        marginLeft: 16,
                        borderRadius: 8,
                        justifyContent: "space-between",
                        padding: "4%",
                        shadowColor: gray,
                        shadowOffset: {
                            width: 1,
                            height: 2,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 4,

                        elevation: 10,
                    }}
                >
                <View style={{
                    width: '98%',
                    height: '35%',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        height: '100%',
                        justifyContent: 'space-evenly'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '600'
                        }}>
                            Balance
                        </Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 11,
                            fontWeight: '200'

                        }}>
                            Today, 08 Sept 2019
                        </Text>
                    </View>
                    <Icon name="more-horizontal" type="feather" color="white" />
                </View>
                    <View style={{
                        width: '98%',
                        height: '35%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            height: '100%',
                            justifyContent: 'space-evenly'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 24,
                                fontWeight: '600',
                            }}>
                                $6,420.00
                            </Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 11,
                                fontWeight: '200'
                            }}>
                                up by 2% from last month
                            </Text>
                        </View>
                        <Icon name="more-horizontal" type="feather" color="white" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: 'white',
                        height: height * 0.24,
                        width: width * 0.8,
                        marginLeft: 16,
                        borderRadius: 8,
                        justifyContent: "space-between",
                        padding: "4%",
                        shadowColor: gray,
                        shadowOffset: {
                            width: 1,
                            height: 2,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 10,
                    }}
                >
                    <View style={{
                        width: '98%',
                        height: '35%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            height: '100%',
                            justifyContent: 'space-evenly'
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '600'
                            }}>
                                Balance
                            </Text>
                            <Text style={{
                                fontSize: 11,
                                fontWeight: '200'

                            }}>
                                Today, 08 Sept 2019
                            </Text>
                        </View>
                        <Icon name="more-horizontal" type="feather" color="white" />
                    </View>
                    <View style={{
                        width: '98%',
                        height: '35%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            height: '100%',
                            justifyContent: 'space-evenly'
                        }}>
                            <Text style={{
                                color: primary1,
                                fontSize: 24,
                                fontWeight: '600',
                            }}>
                                $6,420.00
                            </Text>
                            <Text style={{
                                fontSize: 11,
                                fontWeight: '200'
                            }}>
                                Down by 2% from last month
                            </Text>
                        </View>
                        <Icon name="more-horizontal" type="feather" color="white" />
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <View style={{
                flex: 10,
                backgroundColor: defaultBackground,
                paddingHorizontal: '4.5%',
                paddingVertical: '4%',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Text style={{
                    fontWeight: '600',
                }}>
                    Recent Transactions
                </Text>
                    <Text style={{
                        color: primary1,
                        fontWeight: '500'
                    }}>
                        See all
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    height: '92%',
                    borderRadius: 8,
                    padding: '4%',
                }}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: '24%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            backgroundColor: grayBackground,
                            width: 38,
                            height: 38,
                            alignItems: 'center',
                            borderRadius: 8
                        }}>
                            <Icon name="ios-logo-dropbox" color={primary1} type="ionicon"/>
                        </View>
                        <View style={{
                            justifyContent: 'space-evenly',
                            height: '80%',
                            marginLeft: '5%'

                        }}>
                            <Text style={{
                                fontWeight: '600',
                                color: gray
                            }}>
                                Dropbox Plan
                            </Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '200',
                                color: gray
                            }}>
                                Subscription
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'space-evenly',
                        height: '80%',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{
                            fontWeight: '600',
                            color: 'red'
                        }}>
                            -$144.00
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '200',
                            color: gray
                        }}>
                            18 Sept 2019
                        </Text>
                    </View>
                </View>
                    <Divider style={{
                        marginVertical:2,
                    }} orientation="horizontal" color='#efefef'/>

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        height: '24%',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                backgroundColor: grayBackground,
                                width: 38,
                                height: 38,
                                alignItems: 'center',
                                borderRadius: 8
                            }}>
                                <Icon name="ios-musical-notes" color={primary1} type="ionicon"/>
                            </View>
                            <View style={{
                                justifyContent: 'space-evenly',
                                height: '80%',
                                marginLeft: '5%'
                            }}>
                                <Text style={{
                                    fontWeight: '600',
                                    color: gray
                                }}>
                                    Spotify Subscr.
                                </Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: '200',
                                    color: gray
                                }}>
                                    Subscription
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'space-evenly',
                            height: '80%',
                            alignItems: 'flex-end'
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                color: 'red'
                            }}>
                                -$24.00
                            </Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '200',
                                color: gray
                            }}>
                                12 Sept 2019
                            </Text>
                        </View>
                    </View>
                    <Divider style={{
                        marginVertical:2,
                    }} orientation="horizontal" color='#efefef' />

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        height: '24%',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                backgroundColor: grayBackground,
                                width: 38,
                                height: 38,
                                alignItems: 'center',
                                borderRadius: 8
                            }}>
                                <Icon name="ios-logo-youtube" color={primary1} type="ionicon"/>
                            </View>
                            <View style={{
                                justifyContent: 'space-evenly',
                                height: '80%',
                                marginLeft: '5%'
                            }}>
                                <Text style={{
                                    fontWeight: '600',
                                    color: gray
                                }}>
                                    Youtube Ads.
                                </Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: '200',
                                    color: gray
                                }}>
                                    Income
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'space-evenly',
                            height: '80%',
                            alignItems: 'flex-end'
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                color: 'green'
                            }}>
                                +$32.00
                            </Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '200',
                                color: gray
                            }}>
                                10 Sept 2019
                            </Text>
                        </View>
                    </View>
                    <Divider style={{
                        marginVertical:2,
                    }} orientation="horizontal" color='#efefef' />

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        height: '24%',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                backgroundColor: grayBackground,
                                width: 38,
                                height: 38,
                                alignItems: 'center',
                                borderRadius: 8
                            }}>
                                <Icon name="md-briefcase" color={primary1} type="ionicon"/>
                            </View>
                            <View style={{
                                justifyContent: 'space-evenly',
                                height: '80%',
                                marginLeft: '5%'
                            }}>
                                <Text style={{
                                    fontWeight: '600',
                                    color: gray
                                }}>
                                    Freelance Work
                                </Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: '200',
                                    color: gray
                                }}>
                                    Income
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'space-evenly',
                            height: '80%',
                            alignItems: 'flex-end'
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                color: 'green'
                            }}>
                                +$421.00
                            </Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '200',
                                color: gray
                            }}>
                                06 Sept 2019
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Layout>
    )
}
