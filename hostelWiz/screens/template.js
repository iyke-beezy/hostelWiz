/*
              <ScrollView style={styles.belowSearchBar}>
              <View>
                <Text style={{ paddingLeft: 20, margin: 10, fontSize: 25, fontFamily: 'Baloo-Paaji-Medium' }}>
                  Explore Hostel Wiz
                </Text>
              </View>

              <View style={styles.miniCardComponent}>

                <Card containerStyle={styles.miniCard}

                  image={require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')}

                >

                  <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'Baloo-Paaji-Medium' }}>
                    Explore Apartments
  </Text>
                </Card>

                <Card containerStyle={styles.miniCard}
                  image={require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'Baloo-Paaji-Medium' }}>
                    Explore Hostels
                    </Text>
                </Card>
              </View>

              <TouchableHighlight onPress={() => this.props.navigation.navigate('details')}>
                <View style={[styles.maxCard]}>
                  <SliderBox dotColor={'orange'} onCurrentImagePressed={() => this.props.navigation.navigate('details')} autoplay={true} sliderBoxHeight={screenHeight / 4 - 5} images={this.state.images} >

                  </SliderBox>
                  <TouchableOpacity
                    onPress={() => this.save()}
                    style={styles.saveButton}
                  >
                    <View>
                      {
                        this.state.save ? <AntDesign color='red' style={{ marginTop: 7 }} size={25} name="heart" />
                          :
                          <AntDesign color='white' style={{ marginTop: 7 }} size={25} name="heart" />
                      }

                    </View>
                  </TouchableOpacity>

                  <View style={styles.maxCardTextArea}>
                    <View>
                      <View style={{ flexDirection: 'row' }}>

                        <Text style={styles.title} >
                          Grand Royal Hostels
                        </Text>
                        <Text style={{ flex: 3 }}></Text>

                        <Text style={styles.price}>
                          Ghc 120.00
                        </Text>



                      </View>
                    </View>
                    <View style={styles.description}>
                      <Text style={{ color: 'grey', flex: 8 }} >Second otwe street , 0.2 km from your location</Text>
                      <Text style={{ color: 'grey', flex: 0.2 }} ></Text>
                      <Text style={{ color: 'grey', flex: 2 }} >/per day</Text>
                    </View>

                    <View style={styles.rating}>
                      <AntDesign size={20} style={{ marginBottom: -3 }} color={this.state.rating > 0 ? 'orange' : Colors.tabIconDefault} name="star" />
                      <AntDesign size={20} style={{ marginBottom: -3 }} color={this.state.rating > 1 ? 'orange' : Colors.tabIconDefault} name="star" />
                      <AntDesign size={20} style={{ marginBottom: -3 }} color={this.state.rating > 2 ? 'orange' : Colors.tabIconDefault} name="star" />
                      <AntDesign size={20} style={{ marginBottom: -3 }} color={this.state.rating > 3 ? 'orange' : Colors.tabIconDefault} name="star" />
                      <AntDesign size={20} style={{ marginBottom: -3 }} color={this.state.rating > 4 ? 'orange' : Colors.tabIconDefault} name="star" />
                    </View>

                  </View>
                </View>

              </TouchableHighlight>




              <View>
                <Text></Text>
              </View>
            </ScrollView>
          </ScrollView>
*/