package com.adsourcing.service.resources;


import com.adsourcing.service.mapper.CampaignMapper;
import com.adsourcing.service.model.AdvertiserCampaign;
import com.adsourcing.service.model.Campaign;
import com.adsourcing.service.model.DesignerCampaign;
import com.adsourcing.service.repository.CampaignRepository;
import com.yammer.metrics.annotation.Timed;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.HashSet;
import java.util.Set;

import static com.google.common.collect.Sets.newHashSet;

@Path("/api/designer")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class DesignerCampaignResource {

    private CampaignRepository campaignRepository;
    private CampaignMapper campaignMapper;

    @Inject
    public DesignerCampaignResource(CampaignRepository campaignRepository, CampaignMapper campaignMapper) {
        this.campaignRepository = campaignRepository;
        this.campaignMapper = campaignMapper;
    }

    @GET
    @Path("/campaign/active")
    @Timed
    public Set<DesignerCampaign> getAllThatAreActives() {
        Set<Campaign> campaigns = campaignRepository.findAll();
        Set<DesignerCampaign> designerCampaigns = newHashSet();
        for (Campaign campaign : campaigns) {
            DesignerCampaign designerCampaign = campaignMapper.toDesignerCampaign(campaign);
            designerCampaigns.add(designerCampaign);
        }
        return designerCampaigns;
    }
}
