import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import {styles} from './styles';
import {SwipeListView} from 'react-native-swipe-list-view';
import CustomButton from '../../components/CustomButton';
import Colors from '../../theme/colors';
import {publishedMockData, drafsMockData, mockSections} from '../../mockdata';

type Props = {};

const ListingsScreen: React.FC<Props> = () => {
  const publishedRef = useRef();
  const draftsRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      publishedRef.current.manuallyOpenAllRows(-160);
      draftsRef.current.manuallyOpenAllRows(-80);
    }, 50);
    setTimeout(() => {
      publishedRef.current.closeAllOpenRows();
      draftsRef.current.closeAllOpenRows();
    }, 1500);
  }, []);

  const customLabel = (title: string, showDot: boolean) => {
    return (
      <>
        <Text style={styles.listedText}>{title}</Text>
        {showDot && <View style={styles.dotSeparator} />}
      </>
    );
  };

  const renderPublishedItem = (rowData: any) => {
    let {item} = rowData;
    return (
      <>
        <View style={styles.itemSeparator} />
        <View style={styles.itemStyle}>
          {item.imageStr ? (
            <Image
              source={{uri: item.imageStr}}
              style={styles.itemImageStyle}
            />
          ) : (
            <Image
              source={require('../../assets/Images/carIcon.png')}
              style={styles.itemImageStyle}
            />
          )}

          <View style={styles.titleContainer}>
            <View style={styles.liveContainer}>
              <Text style={styles.liveText}>Live</Text>
            </View>
            <Text style={styles.listedText}>{`Listed:${item.listedDate}`}</Text>
            <Text style={styles.nameText}>{item.name}</Text>
            <View style={styles.amountContainer}>
              {customLabel(item.code, true)}
              {customLabel(`$${item.amount}/day`, true)}
              {customLabel(`${item.photosCount} Photos`, false)}
            </View>
          </View>
        </View>
        <View style={styles.itemSeparator} />
      </>
    );
  };

  const renderDraftItem = (rowData: any) => {
    let {item} = rowData;
    return (
      <>
        <View style={styles.itemSeparator} />
        <View style={styles.itemStyle}>
          {item.imageStr ? (
            <Image
              source={{uri: item.imageStr}}
              style={styles.itemImageStyle}
            />
          ) : (
            <Image
              source={require('../../assets/Images/carIcon.png')}
              style={styles.itemImageStyle}
            />
          )}

          <View style={styles.titleContainer}>
            <View style={[styles.liveContainer,styles.draftContainer]}>
              <Text style={[styles.liveText,styles.draftText]}>Draft</Text>
            </View>
            <Text
              style={
                styles.listedText
              }>{`Only ${item.stepsLeft} more steps left`}</Text>
            <Text style={styles.nameText}>{item.name}</Text>
            <TouchableOpacity>
              <Text style={styles.draftSubmitText}>
                Click to complete & submit now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemSeparator} />
      </>
    );
  };

  const hiddenItem = (
    imgStr: any,
    title: string,
    containerStyles: any,
    rowData: any,
    rowMap: any,
  ) => {
    return (
      <TouchableOpacity
        style={containerStyles}
        onPress={() => {
          console.log(rowMap[rowData.item.key].closeRow, '=====');
          rowMap[rowData.item.key].closeRow();
        }}>
        <View style={styles.hiddenContainer}>
          <Image source={imgStr} />
          <Text style={styles.backTextWhite}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderPublishedHiddenItem = (rowData, rowMap) => {
    return (
      <>
        {hiddenItem(
          require('../../assets/Images/locationIcon.png'),
          'Manage Access',
          [styles.backRightBtn, styles.backRightBtnLeft],
          rowData,
          rowMap,
        )}

        {hiddenItem(
          require('../../assets/Images/calendarIcon.png'),
          'Manage Calendar',
          [styles.backRightBtn, styles.backRightBtnRight],
          rowData,
          rowMap,
        )}
      </>
    );
  };

  const renderDraftHiddenItem = (rowData, rowMap) => {
    return hiddenItem(
      require('../../assets/Images/closeIcon.png'),
      'Delete Draft',
      [styles.backRightBtn, styles.backRightBtnRight],
      rowData,
      rowMap,
    );
  };

  const renderSectionHeader = title => {
    return (
      <View style={styles.sectionView}>
        <Text style={styles.sectionText}>{title}</Text>
      </View>
    );
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.listingsText}>Listings</Text>
        <View style={styles.searchContainer}>
          <Image source={require('../../assets/Images/searchIcon.png')} />
          <View style={styles.spacer} />
          <Image
            style={styles.profileImg}
            source={require('../../assets/Images/carIcon.png')}
          />
        </View>
      </View>
    );
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={mockSections}
        renderItem={({item, index}) => {
          if (index == 0) {
            return (
              <>
                {renderSectionHeader(item)}
                <SwipeListView
                  ref={publishedRef}
                  useFlatList={true}
                  data={publishedMockData}
                  renderItem={renderPublishedItem}
                  renderHiddenItem={renderPublishedHiddenItem}
                  rightOpenValue={-160}
                  onRowDidOpen={onRowDidOpen}
                  closeOnRowOpen={false}
                />
              </>
            );
          } else {
            return (
              <>
                {renderSectionHeader(item)}
                <SwipeListView
                  ref={draftsRef}
                  useFlatList={true}
                  data={drafsMockData}
                  renderItem={renderDraftItem}
                  renderHiddenItem={renderDraftHiddenItem}
                  rightOpenValue={-80}
                  onRowDidOpen={onRowDidOpen}
                  closeOnRowOpen={false}
                />
              </>
            );
          }
        }}
      />

      <CustomButton
        title="+ Add listing"
        buttonStyle={styles.listingBtn}
        labelStyle={styles.addlistingBtn}
      />
    </SafeAreaView>
  );
};

export default ListingsScreen;
