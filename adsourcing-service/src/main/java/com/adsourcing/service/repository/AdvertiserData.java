package com.adsourcing.service.repository;

import com.adsourcing.service.model.Advertiser;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

@Singleton
public class AdvertiserData {

    @Inject
    public AdvertiserData() {
    }

    public List<Advertiser> getAdvertisers() {
        List<Advertiser> advertisers = newArrayList();

        Advertiser advertiser1 = new Advertiser();
        advertiser1.setName("Sarenza");
        advertisers.add(advertiser1);

        Advertiser advertiser2 = new Advertiser();
        advertiser2.setName("CDiscount");
        advertisers.add(advertiser2);

        return advertisers;
    }
}
