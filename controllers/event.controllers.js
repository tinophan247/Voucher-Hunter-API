const {Event, Game} = require("../models");

const createEvent = async (req, res) => {
  const { eventName, description, partnerName, tos, gameList,selectedVoucher,startDate, endDate } = req.body;
  try {
    const newEvent = await Event.create({ eventName, description, partnerName, tos, gameList,selectedVoucher,startDate, endDate  });
    res.status(201).send(newEvent);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllEvent = async (req, res) => {
    try {
        const ListEvent = await Event.findAll(
          {
            include: [{
              model : Game,
              as: "game"
            }],
          }
        );
        res.status(200).send(ListEvent);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateEvent = async (req, res) => {
  const {id} = req.params;
  const { eventName, description, partnerName, tos, gameList,selectedVoucher,startDate, endDate  } = req.body;
  try {
      const detailEvent = await Event.findOne({
        where: {
          id
        }
      });
      detailEvent.eventName = eventName;
      detailEvent.description = description;
      detailEvent.partnerName = partnerName;
      detailEvent.tos = tos;
      detailEvent.gameList = gameList;
      detailEvent.selectedVoucher = selectedVoucher;
      detailEvent.startDate = startDate;
      detailEvent.endDate = endDate;
      await detailEvent.save();

      res.status(200).send(detailEvent);
  } catch (error) {
      res.status(500).send(error);
  }
};

const deleteEvent = async (req, res) => {
  const {id} = req.params;
  try {
      await Event.destroy({
        where: {
          id
        }
      });
      res.status(200).send('Xóa thành công')
  } catch (error) {
      res.status(500).send(error);
  }
};

module.exports= {
    createEvent,
    getAllEvent,
    updateEvent,
    deleteEvent
}